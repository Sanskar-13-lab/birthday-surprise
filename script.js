
document.addEventListener("DOMContentLoaded", () => {
  // BIRTHDAY SURPRISE
  const openBtn = document.getElementById("openBtn");
  const message = document.getElementById("message");

  if (openBtn && message) {
    openBtn.addEventListener("click", () => {
      message.classList.remove("hidden");
      message.style.display = "block";
      message.style.marginTop = "25px";
      message.style.padding = "20px";
      message.style.border = "1px solid #9ce9ff";
      message.style.borderRadius = "15px";

      openBtn.textContent = "Surprise opened 💙";
      openBtn.disabled = true;
    });
  }

  // ANIMATED LOVE LETTER
  const letterBtn = document.getElementById("letterBtn");
  const letter = document.getElementById("letter");

  if (letterBtn && letter) {
    letterBtn.addEventListener("click", () => {
      const isHidden = letter.classList.contains("hidden");

      letter.classList.toggle("hidden");
      letterBtn.textContent = isHidden
        ? "💙 Close your letter"
        : "💌 Open your letter";

      letterBtn.setAttribute("aria-expanded", String(isHidden));
    });
  }

  // REASONS I LOVE YOU
  document.querySelectorAll(".reason-card").forEach((card) => {
    card.addEventListener("click", () => {
      const isFlipped = card.classList.toggle("is-flipped");
      card.setAttribute("aria-expanded", String(isFlipped));
    });
  });

  // ROMANTIC MUSIC PLAYER
  const bgMusic = document.getElementById("bgMusic");
  const musicBtn = document.getElementById("musicBtn");
  const musicDisc = document.getElementById("musicDisc");
  const musicStatus = document.getElementById("musicStatus");

  if (bgMusic && musicBtn && musicDisc && musicStatus) {
    musicBtn.addEventListener("click", async () => {
      if (bgMusic.paused) {
        try {
          await bgMusic.play();

          musicBtn.textContent = "Ⅱ";
          musicBtn.setAttribute("aria-label", "Pause music");
          musicDisc.classList.add("playing");
          musicStatus.textContent = "Playing for you ♡";
        } catch (error) {
          musicStatus.textContent = "Check your music file 💙";
          console.error("Music playback failed:", error);
        }
      } else {
        bgMusic.pause();

        musicBtn.textContent = "▶";
        musicBtn.setAttribute("aria-label", "Play music");
        musicDisc.classList.remove("playing");
        musicStatus.textContent = "Paused ♡";
      }
    });

    bgMusic.addEventListener("ended", () => {
      musicBtn.textContent = "▶";
      musicBtn.setAttribute("aria-label", "Play music");
      musicDisc.classList.remove("playing");
      musicStatus.textContent = "A song just for us";
    });

    bgMusic.addEventListener("error", () => {
      musicStatus.textContent = "Couldn't load the song";
    });
  
  // FINAL BIRTHDAY SURPRISE
  const finalSurpriseBtn = document.getElementById("finalSurpriseBtn");
  const finalMessage = document.getElementById("finalMessage");
  const floatingHearts = document.getElementById("floatingHearts");

  if (finalSurpriseBtn && finalMessage && floatingHearts) {
    finalSurpriseBtn.addEventListener("click", () => {
      const isOpening = finalMessage.classList.contains("hidden");

      if (isOpening) {
        finalMessage.classList.remove("hidden");
        finalSurpriseBtn.textContent = "💙 Keep this moment forever";
        finalSurpriseBtn.setAttribute("aria-expanded", "true");

        // Start a fresh shower of floating hearts
        floatingHearts.replaceChildren();

        const heartSymbols = ["♡", "♥", "💙", "✧", "♡"];

        for (let i = 0; i < 18; i++) {
          const heart = document.createElement("span");
          heart.className = "floating-heart";
          heart.textContent =
            heartSymbols[Math.floor(Math.random() * heartSymbols.length)];

          heart.style.left = `${Math.random() * 90 + 5}%`;
          heart.style.animationDelay = `${Math.random() * 2.5}s`;
          heart.style.fontSize = `${16 + Math.random() * 18}px`;

          floatingHearts.appendChild(heart);

          // Remove each heart after its animation ends
          heart.addEventListener("animationend", () => {
            heart.remove();
          }, { once: true });
        }
      } else {
        finalMessage.classList.add("hidden");
        floatingHearts.replaceChildren();
        finalSurpriseBtn.textContent = "Open your final surprise ✨";
        finalSurpriseBtn.setAttribute("aria-expanded", "false");
      }
    });
  }
  }
});
