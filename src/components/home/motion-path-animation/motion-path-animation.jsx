"use client"

import { useEffect, useRef } from "react";
import { useGSAP } from "@gsap/react";
import Flotant from "@img/flotant.svg";
import Image from "next/image";
import { TextReading} from "@/components/common/text-reading";

export default function MotionPathAnimation({ gsap }) {
    const containerRef = useRef();

    const handleAnimation = () => {
        var tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: "center bottom",
                end: "bottom bottom",
                scrub: true
            }
        });
        
        const screenWidth = window.innerWidth / 2 - 200;

        tl.to(".motion-path-animation-img", {
            motionPath: {
                path: [{ x: -200, y: 0 }, { x: - screenWidth / 2, y: 100 }, { x: -screenWidth - 100, y: 200 }],
                align: ".motion-path-animation-img",
                curviness: 1.5
            },
            duration: 1, 
            ease: "none"
        });
    };

    useGSAP(() => {
        handleAnimation();
    }, { scope: containerRef });

    useEffect(() => {
        const handleResize = () => {
            gsap.killTweensOf([containerRef.current]);
            handleAnimation();
        }

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize)
        }

    }, []);

    return(
        <section ref={containerRef} className="motion-path-animation">
            <TextReading text={"Chez Oshin, chaque plat est une invitation au voyage. Inspiré par la délicatesse et l'harmonie des saveurs japonaises, notre restaurant vous propose une expérience culinaire unique, où tradition et modernité se rencontrent."}/>
            <Image className="motion-path-animation-img" src={Flotant} alt="motion-path-animation" width={510} height={478} />
        </section>
    )
} 