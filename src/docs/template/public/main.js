export default {
  lunrLanguages: ["en", "ru"],
  start: () => {
    const YAID = 96761155;

    (function (m, e, t, r, i, k, a) {
      m[i] =
        m[i] ||
        function () {
          (m[i].a = m[i].a || []).push(arguments);
        };
      m[i].l = 1 * new Date();
      for (var j = 0; j < document.scripts.length; j++) {
        if (document.scripts[j].src === r) {
          return;
        }
      }
      (k = e.createElement(t)),
        (a = e.getElementsByTagName(t)[0]),
        (k.async = 1),
        (k.src = r),
        a.parentNode.insertBefore(k, a);
    })(window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

    ym(YAID, "init", {
      clickmap: true,
      trackLinks: true,
      accurateTrackBounce: true,
      trackHash: true,
      webvisor: true,
    });

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
        ym(YAID, "reachGoal", "use_speech_synthesis");
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
