import Image from "next/image";
import { useRef, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import Oshin from "@img/oshin.svg";

export default function Header({ gsap, pageRef }) {
    const containerRef = useRef();
    const imgRef = useRef();
    const textRef = useRef();
    
    const handleAnimations = () => {

        let tl = gsap.timeline();
        tl.to(
            textRef.current,
            { 
                delay: 2, 
                width: "calc(100% - 20px)", 
                duration: 1,
                bottom: 10,
                onComplete: () => {
                    tl.fromTo(
                        imgRef.current,
                        { 
                            autoAlpha: 0
                        },
                        { 
                            height: window.innerHeight - textRef.current.height - 20 + "px",
                            autoAlpha: 1,
                            delay: 0, 
                            y: 0, 
                            duration: 1,
                            onComplete: () => {
                                tl.to(
                                    pageRef.current,
                                    {
                                       height: "fit-content"
                                    },
                                    ">"
                                );
                            }
                        }, ">"
                    );
                }
            }
        )
    };

    useGSAP(() => {
        if(document.querySelector(".home")){
            handleAnimations();
        }
        
    }, { scope: containerRef });

    useEffect(() => {
        const handleResize = () => {
            gsap.killTweensOf([imgRef.current, textRef.current]);
            handleAnimations();
        }

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize)
        }
    }, []);

    return(
        <header ref={containerRef} className="header" id="header">
            <Image ref={imgRef} className="header-img" src="/api/optimize-image?img=banner.jpg&format=webp" alt="Ramen Oshin" width={1800} height={1500}/>

            <div className="header-content">
                <Image ref={textRef} className="header-content-text" src={Oshin} alt="Ramen Oshin" width={1500} height={1500} />
            </div>
        </header>
    )
}