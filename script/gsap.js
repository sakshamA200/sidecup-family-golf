gsap.to("#navbar",{
    backgroundColor:"#000000",
    height:"6vw",
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
let li = document.querySelectorAll("li")

document.addEventListener("mousemove", (e) => {
  const cursorWidth = crsr.offsetWidth;
  const cursorHeight = crsr.offsetHeight;

  gsap.to(crsr, {
    left: e.clientX - cursorWidth / 2,
    top: e.clientY - cursorHeight / 2,
    duration: 0.2,
    ease: "power2.out"
  });

  gsap.to(blur, {
    left: e.clientX - 250,
    top: e.clientY - 250,
    duration: 0.8,
    ease: "power3.out"
  });
});

li.forEach(link=>{
  link.addEventListener("mouseenter",()=>{
    gsap.to(crsr,{
      width:"100px",
      height:"100px",
      backgroundColor:"transparent",
      border:"1px solid white",
      duration:0.2
    })
  })
})
li.forEach(link=>{
  link.addEventListener("mouseleave", () => {
    gsap.to(crsr, {
      width: "20px",             
      height: "20px",
      backgroundColor: "#affc41",    
      border: "none",                    
      duration:0.2
    });
});
})




