import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";
import { splitTextToLines } from "@/utils/split-text-to-lines.util";

if(typeof window !== "undefined"){
    gsap.registerPlugin(useGSAP);
    gsap.registerPlugin(ScrollTrigger);
}

export const TextReading = ({ text }) => {
    const presentationRef = useRef();

    const handleAnimation = () => {
        const presentation = splitTextToLines(presentationRef.current);
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: presentationRef.current,
                start: "top center",
                end: "bottom center",
                scrub: true
            },
            
        });

        presentation.lines.forEach((line) => {
            gsap.set(
                line, 
                {
                    clipPath: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)",
                }
            );

            tl.to(
                line,
                {
                    clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
                }, ">"
            );
        });
    };

    useGSAP(() => {
        handleAnimation();
    }, { scope: presentationRef });

    useEffect(() => {
        const handleResize = () => {     
            gsap.killTweensOf([presentationRef.current]);
            handleAnimation();
        }

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        }
    }, []);

    return(
        <div className="text-reading">
            <p className={`text-md`}>
                {text}
            </p>
            <p ref={presentationRef} className={`text-md text-2`}>
                {text}
            </p>
        </div>
    )
}