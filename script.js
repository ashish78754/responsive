var tl = gsap.timeline();

if (window.matchMedia("(max-width: 600px)").matches) {
    tl.from("#logo", {
        y: -10,
        opacity: 0,
        duration: 0.8,
        delay: 0.1
    });

    tl.from("ul", {
        opacity: 0,
        duration: 0.8,
        stagger: 0.2
    });

    tl.from("main h1", {
        y: 10,
        opacity: 0,
        duration: 0.8,
        scale: 0.2
    });

    tl.from(".boxes", {
        y: -30,
        opacity: 0,
        duration: 1,
        stagger: 0.1
    });

} else {
    tl.from("#logo", {
        y: -30,
        opacity: 0,
        duration: 1,
        delay: 0.1
    });

    tl.from("ul", {
        y: -30,
        opacity: 0,
        duration: 1,
        stagger: 0.2
    });

    tl.from("ul li", {
        y: -30,
        opacity: 0,
        duration: 1,
        stagger: 0.5
    });

    tl.from("main h1", {
        y: 20,
        opacity: 0,
        duration: 1,
        scale: 0.2
    });

    tl.from(".boxes", {
        y: -30,
        opacity: 0,
        duration: 1,
        stagger: 0.1
    });
}

