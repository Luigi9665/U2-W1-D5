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
