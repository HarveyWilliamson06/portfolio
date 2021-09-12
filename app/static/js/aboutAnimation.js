document.addEventListener("DOMContentLoaded", (event) => {
    window.onload = () => {
        gsap.registerPlugin(ScrollTrigger);

        let t1 = gsap.timeline({
            scrollTrigger: {
                trigger: '.display-1'
            }
        });
        t1.add('start')
            .to("#first", {
                opacity: 1,
                duration: .5,
            })
            .to("#first", {
                opacity: 0,
                duration: .5
            })
            .to("#second", {
                opacity: 1,
                duration: .5,
            })
            .to("#second", {
                opacity: 0,
                duration: .5
            })
            .to("#third", {
                opacity: 1,
                duration: .5,
            })
            .to("#third", {
                opacity: 0,
                duration: .5
            })
            .to("#fourth", {
                opacity: 1,
                duration: .5,
            })
            .to("#fourth", {
                opacity: 0,
                duration: .5
            })
            .to("#fifth", {
                opacity: 1,
                duration: 1,
            })
            .to("#fifth", {
                opacity: 0,
                duration: 0.5
            })
            .to("#sixth", {
                opacity: 1,
                duration: 1
            });

        let t2 = gsap.timeline();
        t2.delay(7);
        t2.repeat(-1);
        t2.to(".far", {
            opacity: 1,
            duration: .5
        })
            .to(".far", {
                opacity: 0,
                duration: .5
            });

        let slide1 = document.querySelector(".two");
        slide1.addEventListener("click", () => {
            const audio = document.querySelector("audio");
            audio.play();
        });

        let t3 = gsap.timeline({
            scrollTrigger: {
                trigger: ".container-iframe"
            }
        });
        t3.from(".slide2-heading", {
            x: 500,
            opacity: 0,
            duration: 3
        })
            .from(".container-iframe", {
                x: 500,
                opacity: 0,
                duration: 1,
                delay: 1
            })

        let slide2 = document.querySelector(".three");
        slide2.addEventListener("click", () => {
            const audio = document.querySelector(".audio2");
            audio.play();
        });

        let t4 = gsap.timeline({
            scrollTrigger: {
                trigger: ".container-iframe2"
            }
        });
        t4.from(".slide3-heading", {
            x: 500,
            opacity: 0,
            duration: 3
        })
            .from(".container-iframe2", {
                x: 500,
                opacity: 0,
                duration: 1,
                delay: 1
            })

    };
});