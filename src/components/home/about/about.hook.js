import { useRef, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import { createTextAnimation } from "@utils/create-text-animation.util";
import { splitTextToLines } from "@/utils/split-text-to-lines.util";
import { useScreen } from "@utils/use-screen.util";

export const useAbout = ({ gsap }) => {
    const { format } = useScreen();

    const etablishments = [
        {
            title: "Oshin Aiko",
            img: "/api/optimize-image?img=a-propos-01.jpg&format=webp",
            flags: [
                {
                    text: "128 Boulevard des Cerisiers, 75012 Paris",
                    color: "flag-red-fill"
                },
                {
                    text: "Lyon",
                    color: "flag-red-fill"
                },
                {
                    text: "Spécialité : Tonkotsu Ramen, Shoyu Ramen",
                    color: "flag-red-stroke"
                }
            ]
        },
        {
            title: "Oshin Haruto",
            img: "/api/optimize-image?img=a-propos-02.jpg&format=webp",
            flags: [
                {
                    text: "42 Rue des Lanternes, 75003 Paris",
                    color: "flag-red-fill"
                },
                {
                    text: "Marseille",
                    color: "flag-red-fill"
                },
                {
                    text: "Spécialité : Miso Ramen, Tsukemen",
                    color: "flag-red-stroke"
                }
            ]
        }
    ];

    const texts = {
        story: [
            "Oshin est né d’un rêve : celui de partager l’authenticité et la richesse des saveurs japonaises dans un lieu où chaque détail compte. Fondé par deux passionnés de cuisine nippone, notre premier restaurant a vu le jour avec une ambition simple : offrir une expérience gustative raffinée, inspirée des traditions culinaires du Japon. Grâce à une cuisine minutieuse et une ambiance chaleureuse, Oshin est rapidement devenu un lieu incontournable pour les amateurs de gastronomie japonaise.",
            "Face à cet engouement, un second restaurant a ouvert ses portes, portant avec lui le même esprit : excellence, convivialité et respect des ingrédients. Chaque assiette raconte une histoire, mêlant savoir-faire ancestral et créativité moderne. Aujourd’hui, Oshin continue d’évoluer en restant fidèle à sa mission : éveiller les sens et transporter ses convives à travers un voyage culinaire unique."
        ]
    };

    const containerRef = useRef();
    const text1Ref = useRef();
    const text2Ref = useRef();
    const text3Ref = useRef();
    const aboutContentRef = useRef();

    const handleAnimation = () => {
        const splitTexts = [
            splitTextToLines(text1Ref.current),
            splitTextToLines(text2Ref.current),
            splitTextToLines(text3Ref.current)
        ];

        splitTexts.forEach((text) => {
            text.lines.forEach((line) => {
                const text = line.textContent;
                const wrapper = document.createElement("div");
                wrapper.className = "line";
                const span = document.createElement("span");
                span.textContent = text;
                wrapper.appendChild(span);
                line.parentNode.replaceChild(wrapper, line);
            });
        });
       
        gsap.to(
            ".about-line .line span",
            {
                y: 0,
                duration: 1,
                ease: "hop2",
                stagger: 0.1,
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top center",
                    end: "top bottom"
                }
            }
        );

        createTextAnimation({ 
            element: text1Ref.current,
            y: -200,
            duration: 5
        });

        createTextAnimation({ 
            element: text2Ref.current,
            y: -400,
            duration: 20
        });

        createTextAnimation({ 
            element: text3Ref.current,
            y: -300,
            duration: 2
        });

        const heightImage = window.innerHeight - 124;

        gsap.set(".about-card-media-img", {
            height: heightImage
        });

        const aboutCard = document.querySelectorAll(".about-card");

        if(format == "mobile"){
            gsap.set(aboutCard[0], {
                y: 200
            })
    
            gsap.set(aboutCard[1], {
                y: -200
            })
    
            gsap.to(
                aboutCard,
                {
                    y: 0,
                    ease: "none",
                    scrollTrigger: {
                        trigger: ".about-list",
                        start: "top-=200 center",
                        end: `center center`,
                        scrub: true
                    },
                }
            );
        }
    };

    useGSAP(() => {
        handleAnimation();
    }, { scope: containerRef });

    useEffect(() => {

        const handleResize = () => {     
            gsap.killTweensOf([text1Ref.current, text2Ref.current, text2Ref.current]);
            handleAnimation();
        }

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        }
    }, []);

    return {
        etablishments,
        containerRef,
        text1Ref,
        text2Ref,
        text3Ref,
        aboutContentRef,
        texts
    };
}