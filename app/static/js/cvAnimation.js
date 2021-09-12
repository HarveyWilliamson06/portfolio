document.addEventListener("DOMContentLoaded", function (event) {
    window.onload = () => {

        gsap.registerPlugin(ScrollTrigger);

        let t1 = gsap.timeline();
        t1.from(".img1", {x: 100, opacity: 0, duration: 1, delay: 1})
            .from(".img2", {x: 100, opacity: 0, duration: .5})
            .from("h1", {y: 50, opacity: 0, duration: .5});
        };

        let t2 = gsap.timeline({
            scrollTrigger: {
                trigger: ".table-responsive"
            }
        });
        t2.add('start')
        t2.from(".table-responsive", {
            x: 100, opacity: 0, duration: 1
        }, 'start')
        .from(".heading2", {
            x: 100, opacity: 0, duration: 1
        }, 'start')
});
