import gsap from "gsap";

export const createTextAnimation = ({element, y, duration}) => {
    gsap.to(
        element,
        {
            y,
            duration,
            scrollTrigger: {
                trigger: element,
                start: "bottom center",
                end: "bottom+=500",
                scrub: 1
            },
        }
    );
};