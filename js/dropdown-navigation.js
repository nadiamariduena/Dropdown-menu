function init() {
  const hamburger = document.querySelector(".menu");
  const hamblines = document.querySelectorAll(".menu line");
  const navOpen = document.querySelector(".nav-open");
  const services = document.querySelector(".services");
  // const contact = document.querySelector(".contact");
  const logo = document.querySelector(".logo");

  // -----------------------------------------------------------
  // Careful in how you write the name of the library, it took me few minutes until i realized i don't...
   // need to write the library names in camelC*ase because of that the curtain didn't drop.
  // this section is connected to the line 38:  hamburger.addEventListener("click", () => {
  const tl = new TimelineMax({ paused: true, reversed: true });
  // const tl = new TimelineMax({ paused: true, reversed: true });
  //
  //
  //
  tl.to(navOpen, 0.5, { y: 0 })
    // 0.5 corresponds to the time it takes to reach the end
    // { y: 0 }) corresponds to the position, so from where it will start, if you add 60 it will make and space on top like adding a margin top.
    // .fromTo: this is the from: { opacity: 0, y: 10 }, and this is the To: { opacity: 1, y: 0 } all in the same line.
    //"-=1" corresponds to the delay 1 second.
    //
    //
    .fromTo(services, 0.5, { opacity: 0, y: 10 }, { opacity: 1, y: 0 }, "-=0.1")
    // .fromTo(contact, 0.5, { opacity: 0, y: 10 }, { opacity: 1, y: 0 }, "-=0.5")
    .fromTo(logo, 0.2, { color: "#000" }, { color: "#fff" }, "-=1")
    .fromTo(hamblines, 0.2, { stroke: "#000" }, { stroke: "#fff" }, "-=1");
  // its going to change the hamburger lines default white(check the svg /html)
  //stroke 1: { stroke: "#000" }, color of the hamburger to black.
  //stroke 2: { stroke: "#fff" }, "-=1" _color of the hamburger to white.
  //
  //-------------------------------------------------------------------------
  // ----------the--backward-effect-after-opening-the dropdown---------------
  //
  //
  // this section is connected to the:  const tl = new TimelineMax({ paused: true, reversed: true });
  hamburger.addEventListener("click", () => {
    tl.reversed() ? tl.play() : tl.reverse();
    // it will check these 3 steps, tl.reversed() ? tl.play() : tl.reverse();  so what it will do is: it *checks, it *plays the animation then it *reverse!
  });
  //
  //
  //
  //
}
init();

// NOTES ----------***
//If i wanted it to come from the other side, i have to change the AXES inside the .nav-open/css
// change this : transform: translateY(-100%); _ to this: transform: translateX(-100%);
//then in js change this to(navOpen, 0.5, { y: 0 }) _ to this   tl.to(navOpen, 0.5, { x: 0 })
