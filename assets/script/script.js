const nav = document.querySelector(".containerNav");
const hero = document.querySelector(".hero");

window.addEventListener("scroll", () => {
  const triggerPoint = hero.offsetHeight - nav.offsetHeight;
  if (window.scrollY > triggerPoint) {
    nav.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
  }
});

const divSvg = document.querySelector(".svg");
const svg = divSvg.getElementsByTagName("svg")[0];
const allG = svg.querySelectorAll("g");

function toggleOpacity() {
  let randomNumber = Math.floor(Math.random() * allG.length);
  const g = allG[randomNumber];

  // Se ha clip-path o fill, esci subito
  if (g.hasAttribute("clip-path") || g.hasAttribute("fill")) {
    return; // esce dalla funzione senza fare nulla
  }

  //   altrimenti continua con le condizioni
  if (g.getAttribute("opacity") === "0") {
    g.setAttribute("opacity", "1");
  } else {
    g.setAttribute("opacity", "0");
  }
}

// Cambia l'opacità ogni secondo
setInterval(toggleOpacity, 10);
