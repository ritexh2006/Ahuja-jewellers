// function init() {
//     gsap.registerPlugin(ScrollTrigger);

//     const locoScroll = new LocomotiveScroll({
//         el: document.querySelector(".main"),
//         smooth: true
//     });
//     locoScroll.on("scroll", ScrollTrigger.update);

//     ScrollTrigger.scrollerProxy(".main", {
//         scrollTop(value) {
//             return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
//         }, // we don't have to define a scrollLeft because we're only scrolling vertically.
//         getBoundingClientRect() {
//             return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
//         },
//         pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
//     });


//     ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

//     ScrollTrigger.refresh();

// }

// //cursor

// init()


const lenis = new Lenis()

lenis.on('scroll', (e) => {
    console.log(e)
})

lenis.on('scroll', ScrollTrigger.update)

gsap.ticker.add((time) => {
    lenis.raf(time * 1000)
})

gsap.ticker.lagSmoothing(0)

var crsr = document.querySelector(".cursor")
var main = document.querySelector(".main")
document.addEventListener("mousemove", function (dets) {
    crsr.style.left = dets.x + 20 + "px"
    crsr.style.top = dets.y + 20 + "px"
})


// //section-3

gsap.from(".section-3 h1,.section-3 h2", {
    y: 10,
    rotate: 10,
    opacity: 0,
    delay: 0.3,
    duration: 0.7
})
var tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".section-3",
        // scroller: ".main",
        // markers: true,
        start: "top 30%",
        end: "100% 90%",
        scrub: 3
    }
})
tl.to(".section-3 h1", {
    x: -100,
}, "anim")
tl.to(".section-3 h2", {
    x: 100
}, "anim")
tl.to(".section-3 video", {
    width: "90%"
}, "anim")

// var tl2 = gsap.timeline({
//     scrollTrigger: {
//         trigger: ".section-3 h1",
//         // scroller: ".main",
//         markers: true,
//         start: "10% 50%",
//         end: "70% 50%",
//         scrub: true,
//     }
// })
// tl2.to(".main", {
//     backgroundColor: "#fff",
// })

// var tl3 = gsap.timeline({
//     scrollTrigger: {
//         trigger: ".section-3 h1",
//         // scroller: ".main",
//         markers: true,
//         start: "10% 50%",
//         end: "70% 50%",
//         scrub: 3
//     }
// })

// tl3.to(".main", {
//     backgroundColor: "#0F0D0D"
// })




//navbar
var slider = document.querySelector(".slider")

var open = document.querySelector("#mobile-nav-open")

var close = document.querySelector("#mobile-nav-close")

console.log(open)

open.addEventListener("click", () => {
    close.style.display = "initial"
    open.style.display = "none"
    slider.style.left = "0%"
})

close.addEventListener("click", () => {
    open.style.display = "initial"
    close.style.display = "none"
    slider.style.left = "-100%"
})