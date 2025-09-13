window.alert("Antes de começar a ver o conteúdo, recomendo a pôr a música para tocar primeiro, para uma melhor experiência.")

// script.js - comportamentos básicos para os cards
document.addEventListener("DOMContentLoaded", () => {
  const gallery = document.getElementById("gallery");

  // Exemplo: clique no card mostra um alert com título (você pode alterar para abrir modal, etc)
  gallery.addEventListener("click", (ev) => {
    const card = ev.target.closest(".card");
    if (!card) return;
    const desc = card.dataset.desc || card.querySelector(".desc")?.innerText || "";
    alert(`\n${desc}`);
  });

  // Acessibilidade: permitir foco por teclado
  document.querySelectorAll(".card").forEach(c => {
    c.tabIndex = 0; // torna focável
  });

  document.getElementById("year").textContent = new Date().getFullYear();

  const audio = document.getElementById('meuAudio');
  const toggleButton = document.getElementById('toggleButton');

toggleButton.addEventListener('click', () => {
  if (audio.paused) {
    audio.play();
    toggleButton.textContent = "Pausar";
  } else {
    audio.pause();
    toggleButton.textContent = "Tocar";
  }
});

})