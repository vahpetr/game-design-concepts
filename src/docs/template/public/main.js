export default {
  lunrLanguages: ["en", "ru"],
  start: () => {
    const YAID = 96761155;

    function appendMeta() {
      const meta = [
        {
          tag: "link",
          attrs: {
            rel: "apple-touch-icon",
            sizes: "180x180",
            href: "/apple-touch-icon.png",
          },
        },
        {
          tag: "link",
          attrs: {
            rel: "icon",
            type: "image/png",
            sizes: "32x32",
            href: "/favicon-32x32.png",
          },
        },
        {
          tag: "link",
          attrs: {
            rel: "icon",
            type: "image/png",
            sizes: "16x16",
            href: "/favicon-16x16.png",
          },
        },
        {
          tag: "link",
          attrs: { rel: "manifest", href: "/site.webmanifest" },
        },
        {
          tag: "link",
          attrs: {
            rel: "mask-icon",
            href: "/safari-pinned-tab.svg",
            color: "#22241f",
          },
        },
        {
          tag: "meta",
          attrs: {
            name: "apple-mobile-web-app-title",
            content: "Game Design Concepts",
          },
        },
        {
          tag: "meta",
          attrs: {
            name: "application-name",
            content: "Game Design Concepts",
          },
        },
        {
          tag: "meta",
          attrs: { name: "msapplication-TileColor", content: "#22241f" },
        },
        {
          tag: "meta",
          attrs: { name: "theme-color", content: "#ffffff" },
        },
      ];

      meta.forEach((p) => {
        const el = document.createElement(p.tag);
        Object.keys(p.attrs).forEach((key) => {
          el.setAttribute(key, p.attrs[key]);
        });
        document.head.appendChild(el);
      });
    }

    appendMeta();

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

    if ("serviceWorker" in navigator) {
      window.addEventListener("load", function () {
        navigator.serviceWorker.register("/public/sw.js").then(
          function (registration) {
            console.log(
              "ServiceWorker registration successful with scope: ",
              registration.scope
            );
          },
          function (err) {
            console.log("ServiceWorker registration failed: ", err);
          }
        );
      });
    }

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
