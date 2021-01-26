//From, to and fromto tween methods
// gsap.from("li", {
//   y: 30,
//   duration: 1,
//   delay: 0.6,
//   stagger: 0.4,
//   repeat: -1,
//   repeatDelay: 0.6,
//   yoyo: true,
//   ease: "power2.out",
// });

// gsap.to("li", {
//   y: 30,
//   duration: 1,
//   delay: 0.6,
//   //   stagger: 0.4,
//   repeat: -1,
//   repeatDelay: 0.6,
//   yoyo: true,
//   ease: "power2.out",
// });

// gsap.fromTo(
//   "header",
//   { x: -40 },
//   { x: 40, ease: "power1.out", repeat: -1, yoyo: true }
// );

// gsap.set("#header", { opacity: 0 });

// using above methods together to animate a page

// gsap.from("body", {
//     backgroundColor: "#fff",
//     duration: 1.7,
//     ease: "none",
//   })

// gsap.from("h1", {
//   y: -30,
//   opacity: 0,
//   duration: 1,
//   delay: 1,
//   ease: "power2.out",
// });

// gsap.from("p", {
//   y: -30,
//   opacity: 0,
//   duration: 1,
//   delay: 0.2 + 1,
//   ease: "power2.out",
// });

// gsap.from(["img", "h2"], {
//   opacity: 0,
//   duration: 1,
//   delay: 1.2 + 1,
//   ease: "power4.out",
// });

// gsap.from("li", {
//   opacity: 0,
//   y: -5,
//   stagger: 0.2,
//   delay: 2 + 1,
//   ease: "power4.in",
// });

//using a timeline
const timeline = gsap.timeline({ paused: true });

timeline
  .from("body", {
    backgroundColor: "#fff",
    duration: 1.7,
    ease: "none",
  })
  .from(
    ["h1", "p"],
    {
      y: -30,
      opacity: 0,
      duration: 1,
      ease: "power2.out",
      stagger: 0.2,
    },
    "mainText"
  )
  .from(["img", "h2"], {
    opacity: 0,
    duration: 1,
    ease: "power4.out",
  })
  .from(
    "ul li",
    {
      opacity: 0,
      y: -5,
      stagger: 0.2,
      ease: "power4.in",
    },
    "<1" //run 1s after the previous tween
  );

//controlling the timelines
const btnPlay = document.querySelector("#btnPlay");
const btnPause = document.querySelector("#btnPause");
const btnResume = document.querySelector("#btnResume");
const btnReverse = document.querySelector("#btnReverse");
const btnSpeedUp = document.querySelector("#btnSpeedUp");
const btnSlowDown = document.querySelector("#btnSlowDown");
const btnSeek = document.querySelector("#btnSeek");
const btnProgress = document.querySelector("#btnProgress");
const btnRestart = document.querySelector("#btnRestart");

btnPlay.addEventListener("click", () => {
  timeline.play(); //will always play forward
});

btnPause.addEventListener("click", () => {
  timeline.pause();
});

btnResume.addEventListener("click", () => {
  timeline.resume(); //will play w/o altering the current play direction
});

btnReverse.addEventListener("click", () => {
  timeline.reverse();
});

btnSpeedUp.addEventListener("click", () => {
  timeline.timeScale(2);
});

btnSlowDown.addEventListener("click", () => {
  timeline.timeScale(0.5);
});

btnSeek.addEventListener("click", () => {
  timeline.seek(1);
});

btnProgress.addEventListener("click", () => {
  timeline.progress(0.5);
});

btnRestart.addEventListener("click", () => {
  timeline.restart();
});
