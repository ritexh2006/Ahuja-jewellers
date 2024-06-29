var slider = document.querySelector(".slider")

var open = document.querySelector("#mobile-nav-open")

var close = document.querySelector("#mobile-nav-close")

console.log(open)

open.addEventListener("click",()=>{
    close.style.display="initial"
    open.style.display="none"
    slider.style.left="0%"
})

close.addEventListener("click",()=>{
    open.style.display="initial"
    close.style.display="none"
    slider.style.left="-100%"
})

