"use client"

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export function TitleSection({ title, className = "cl-red-01", position }) {

    const containerRef = useRef();
    const lineSpanRef = useRef();

    useGSAP(() => {
        gsap.to(
            lineSpanRef.current, 
            {
                y: 0,
                duration: 1,
                ease: "hop2",
                stagger: 0.1,
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "center bottom",
                    end: "bottom",
                    // markers: true
                }
            }
        );
    }, { scope: containerRef});

    return(
        <div ref={containerRef} className={`title-section ${position}`}>
            <h2 className={`line title-md ${className}`}>
                <span ref={lineSpanRef}>{title}</span>
            </h2>
        </div>
    )
}