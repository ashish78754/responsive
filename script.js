var tl= gsap.timeline()

tl.from("#logo",{
    y:-30,
    opacity:0,
    duration:1,
    delay:0.1  
})

tl.from("ul",{
    y:-30,
    opacity:0,
    duration:1,
    stagger:0.2
})

tl.from("ul li",{
    y:-30,
    opacity:0,
    duration:1,
    stagger:0.5
})

tl.from("main h1",{
    y:20,
    opacity:0,
    duration:1,
    scale:0.2
})

tl.from(".boxes",{
    y:-30,
    opacity:0,
    duration:1,
    stagger:0.1
})
