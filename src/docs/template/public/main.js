export default {
  lunrLanguages: ["en", "ru"],
  start: () => {
    if (!window.speechSynthesis) {
      console.log("SpeechSynthesis is not supported in this browser.");
      return;
    }

    let speaking = false;
    let currentSentenceIndex = 0;
    let sentences = [];
    let selectedVoice = null;
    let speakUIEnable = false;

    function setupSpeakUI() {
      if (speakUIEnable) return;
      speakUIEnable = true;

      const speakButton = document.createElement("button");
      speakButton.className = "speak-btn";
      speakButton.textContent = "►";

      const progressContainer = document.createElement("div");
      progressContainer.className = "progress-container";
      const progressBar = document.createElement("div");
      progressBar.className = "progress-bar";
      progressContainer.appendChild(progressBar);

      function initAndSpeakSentence(index) {
        if (index < sentences.length && selectedVoice) {
          const sentence = sentences[index];
          const msg = new SpeechSynthesisUtterance(sentence);
          msg.voice = selectedVoice;

          msg.onend = () => {
            currentSentenceIndex++;
            if (currentSentenceIndex < sentences.length && speaking) {
              updateProgress(currentSentenceIndex, sentences.length);
              initAndSpeakSentence(currentSentenceIndex);
            } else {
              speaking = false;
              speakButton.textContent = "►";
              currentSentenceIndex = 0;
              updateProgress(0, sentences.length);
            }
          };

          window.speechSynthesis.speak(msg);
        }
      }

      function updateProgress(current, total) {
        const progressPercentage = (current / total) * 100;
        progressBar.style.width = `${progressPercentage}%`;
      }

      speakButton.onclick = (ev) => {
        if (!speaking) {
          if (sentences.length === 0 || currentSentenceIndex === 0) {
            const articleText =
              document.querySelector("article").textContent || "";
            sentences = splitTextToSentences(articleText);
          }
          speaking = true;
          ev.target.textContent = "❚❚";
          initAndSpeakSentence(currentSentenceIndex);
        } else {
          window.speechSynthesis.cancel();
          speaking = false;
          ev.target.textContent = "►";
        }
      };

      document.body.appendChild(speakButton);
      document.body.appendChild(progressContainer);
    }

    function loadAndSelectVoice() {
      const voices = window.speechSynthesis.getVoices();
      const lang = document.querySelector("html").lang || "en";
      selectedVoice =
        voices.find((voice) => voice.lang.startsWith(lang)) || null;

      if (voices.length > 0 && selectedVoice) {
        setupSpeakUI();
      } else {
        window.speechSynthesis.onvoiceschanged = () => {
          const voices = window.speechSynthesis.getVoices();
          selectedVoice =
            voices.find((voice) => voice.lang.startsWith(lang)) || null;
          if (voices.length > 0 && selectedVoice) {
            setupSpeakUI();
            window.speechSynthesis.onvoiceschanged = null;
          }
        };
      }
    }

    loadAndSelectVoice();

    function splitTextToSentences(text) {
      return text.match(/[^\.!\?]+[\.!\?]+/g) || [];
    }
  },
};
