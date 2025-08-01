gsap.to("#navbar",{
    backgroundColor:"#000000",
    height:"135px",
    duration:0.5,
    scrollTrigger:{
        trigger:"#navbar",
        scroller:"body",
        start:"top -10%",
        end:"end -11%",
        scrub:1
    }
})
gsap.to("main",{
    backgroundColor:"#000",
    scrollTrigger:{
        trigger:"main",
        scroller:"body",
        start:"top -50",
        end:"top -100%",
        scrub:4,
    }
})

let crsr = document.getElementById("cursor");
let blur = document.getElementById("cursor-blur");

document.addEventListener("mousemove", (e) => {
  // Animate the main cursor
  gsap.to(crsr, {
    left: e.clientX,
    top: e.clientY,
    duration: 0.2,   // Smaller = faster; Larger = more delay
    ease: "power2.out"
  });

  // Animate the blur effect (with more delay)
  gsap.to(blur, {
    left: e.clientX - 250,
    top: e.clientY - 250,
    duration: 0.8,
    ease: "power3.out"
  });
});

