document.addEventListener("DOMContentLoaded", function (event) {
    window.onload = () => {
        gsap.registerPlugin(ScrollTrigger);

        let t1 = gsap.timeline({
            scrollTrigger: {
                trigger: ".heading",
                markers: false
            }
        });
        t1.from(".heading", { y: 100, opacity: 0, duration: 1 })
            .from(".heading h1", { x: 100, opacity: 0, duration: 1 })
            .from(".line", { y: 110, opacity: 0, duration: 1 });

        let t2 = gsap.timeline({
            scrollTrigger: {
                trigger: '.p',
                markers: false
            }
        });
        t2.to(".p", { 
            x: 100, 
            opacity: 0, 
            duration: 5 
        });
    };
});
