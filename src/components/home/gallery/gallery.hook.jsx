import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import Gallery1 from "@img/gallery-1.jpg";
import Gallery2 from "@img/gallery-2.jpg";
import Gallery3 from "@img/gallery-3.jpg";
import Gallery4 from "@img/gallery-4.jpg";
import Gallery5 from "@img/gallery-5.jpg";
import Gallery6 from "@img/gallery-6.jpg";
import Gallery7 from "@img/gallery-7.jpg";
import Gallery8 from "@img/gallery-8.jpg";
import Gallery9 from "@img/gallery-9.jpg";
import { stagger } from "framer-motion";

export const useGallery = ({ gsap }) => {
    const galleries = [
        {
            img: Gallery1,
            alt: "Restaurant"
        },
        {
            img: Gallery2,
            alt: "Restaurant"
        },
        {
            img: Gallery3,
            alt: "Restaurant"
        },
        {
            img: Gallery4,
            alt: "Restaurant"
        },
        {
            img: Gallery9,
            alt: "Restaurant"
        },
        {
            img: Gallery5,
            alt: "Restaurant"
        },
        {
            img: Gallery6,
            alt: "Restaurant"
        },
        {
            img: Gallery7,
            alt: "Restaurant"
        },
        {
            img: Gallery8,
            alt: "Restaurant"
        }
    ];

    const textReading = "Bienvenue chez Oshin. Plongez dans une expérience culinaire unique, où notre dévouement à l'art du ramen se traduit par des bols fumants de délices savoureux. Explorez notre menu élaboré, imprégné des saveurs riches et des traditions héritées du Japon.";
    
    const containerRef = useRef(null);
    const mediasRef = useRef(null);

    useGSAP(() => {
        gsap.set(".gallery-media:nth-child(n+4)", {
            y: 400
        })

        const tl = gsap.timeline();
        
        tl.to(".gallery-media:nth-child(n+4)",{ 
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top center",
                end: "top-=100 top",
                scrub: 1
            },
            y: 0,
            stagger: 0.1
        });
    }, { scope: containerRef});

    return { galleries, containerRef, mediasRef };
}