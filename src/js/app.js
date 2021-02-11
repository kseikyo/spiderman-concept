document.addEventListener("DOMContentLoaded", () => {
  // Addign overflow hidden to body to remove scrolling bards while animating
  document.body.style.overflow = "hidden";

  // GSAP timeline animations on page load
  const tl = gsap.timeline({
    defaults: { delay: 5, duration: 1, ease: "expo.inOut" },
  });

  tl.fromTo(".bg__loader", { width: "100%" }, { width: "0%" })
    .fromTo(
      ".bg__video",
      { width: "0%", opacity: 0 },
      { width: "100%", opacity: 1, delay: 0, duration: 2 },
      "-=1"
    )
    .fromTo(
      ".logo",
      0.7,
      { y: "-3.125rem", opacity: 0 },
      { y: 0, opacity: 1, delay: 0, duration: 2 },
      "-=0.5"
    )
    .fromTo(
      ".hamburger",
      0.7,
      { y: "-3.125rem", opacity: 0 },
      { y: 0, opacity: 1, delay: 0, duration: 2 },
      "-=0.5"
    )
    .fromTo(
      ".nav__list",
      0.7,
      { y: "-3.125rem", opacity: 0 },
      { y: 0, opacity: 1, delay: 0, duration: 2 },
      "-=0.5"
    )
    .fromTo(
      ".nav__social",
      0.7,
      { y: "-3.125rem", opacity: 0 },
      { y: 0, opacity: 1, delay: 0, duration: 2 },
      "-=0.5"
    )
    .fromTo(
      ".content",
      0.7,
      { y: "-3.125rem", opacity: 0 },
      { y: 0, opacity: 1, delay: 0, duration: 2 },
      "-=0.5"
    )
    .fromTo(
      ".content__text",
      0.7,
      { y: "-3.125rem", opacity: 0 },
      { y: 0, opacity: 1, delay: 0, duration: 2 },
      "-=0.5"
    )
    .fromTo(
      ".content__btns",
      0.7,
      { y: "-3.125rem", opacity: 0 },
      { y: 0, opacity: 1, delay: 0, duration: 2 },
      "-=0.5"
    )
    .fromTo(
      ".content__icons",
      0.7,
      { y: "-3.125rem", opacity: 0 },
      { y: 0, opacity: 1, delay: 0, duration: 2 },
      "-=0.5"
    )
    .fromTo(
      ".content__image",
      0.7,
      { x: "-30rem", opacity: 0 },
      { x: "0", opacity: 1, delay: 0, duration: 2 },
      "-=0.5"
    )
    .eventCallback("onComplete", (_) => {
      // Removing overflow hidden from body
      document.body.style.overflow = "";
    });
});

// Add click event listener on hamburger
// to animate the hamburger and the nav__list
document.querySelector(".hamburger").addEventListener("click", (_) => {
  document.querySelector(".hamburger").classList.toggle("hamburger-active");
  document.querySelector(".nav__list").classList.toggle("nav__list-open");
});
