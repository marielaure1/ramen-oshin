"use client";

import CardLogo1 from "@img/card-logo1.svg";
import CardLogo2 from "@img/card-logo2.svg";
import CardLogo3 from "@img/card-logo3.svg";
import CardLogo4 from "@img/card-logo4.svg";
import CardLogo5 from "@img/card-logo5.svg";
import CardLogo6 from "@img/card-logo6.svg";
import CardLogo7 from "@img/card-logo7.svg";
import CardLogo8 from "@img/card-logo8.svg";
import { useState, useRef } from "react";
import { useGSAP } from "@gsap/react";
import { useAnimation } from "@/utils/animation.util";
import ShioRamen from "@img/shio-ramen.jpg";
import ShoyuRamen from "@img/shoyu-ramen.jpg";
import TonkotsuRamen from "@img/tonkotsu-ramen.jpg";
import MisoRamen from "@img/miso-ramen.jpg";
import Tsukemen from "@img/tsukemen.jpg";
import Tantanmen from "@img/tantanmen.jpg";
import CurryRamen from "@img/curry-ramen.jpg";
import HiyashiChuka from "@img/hiyashi-chuka.jpg";

export default function useMenu() {
    const { gsap } = useAnimation();
    const menuContent = useRef();
    const menuContentSwitchBtn = useRef();

    const menuList = [
        {
            recto: {
                img: CardLogo1
            },
            verso: {
                category: "Classique",
                emoji: "🍜",
                img: TonkotsuRamen,
                title: "Tonkotsu Ramen",
                ingredients: [
                    { color: "flag-red-fill", text: "Chashu" },
                    { color: "flag-red-stroke", text: "Kikurage" },
                ]
            }
        },
        {
            recto: {
                img: CardLogo2
            },
            verso: {
                category: "Traditionnel",
                emoji: "🥢",
                img: ShoyuRamen,
                title: "Shoyu Ramen",
                ingredients: [
                    { color: "flag-red-fill", text: "Menma" },
                    { color: "flag-red-stroke", text: "Narutomaki" }
                ]
            }
        },
        {
            recto: {
                img: CardLogo3
            },
            verso: {
                category: "Riche en saveurs",
                emoji: "🌽",
                img: MisoRamen,
                title: "Miso Ramen",
                ingredients: [
                    { color: "flag-red-fill", text: "Maïs" },
                    { color: "flag-red-stroke", text: "Chashu" }
                ]
            }
        },
        {
            recto: {
                img: CardLogo4
            },
            verso: {
                category: "Trempé",
                emoji: "🥣",
                img: Tsukemen,
                title: "Tsukemen",
                ingredients: [
                    { color: "flag-red-fill", text: "Épaules de porc" },
                    { color: "flag-red-stroke", text: "Algue Nori" },
                ]
            }
        },
        {
            recto: {
                img: CardLogo5
            },
            verso: {
                category: "Léger & iodé",
                emoji: "🌊",
                img: ShioRamen,
                title: "Shio Ramen",
                ingredients: [
                    { color: "flag-red-fill", text: "Wakame" },
                    { color: "flag-red-stroke", text: "Graines de sésame" }
                ]
            }
        },
        {
            recto: {
                img: CardLogo6
            },
            verso: {
                category: "Épicé",
                emoji: "🌶️🔥",
                img: Tantanmen,
                title: "Tantanmen",
                ingredients: [
                    { color: "flag-red-fill", text: "Viande de porc" },
                    { color: "flag-red-stroke", text: "Cacahuètes" }
                ]
            }
        },
        {
            recto: {
                img: CardLogo7
            },
            verso: {
                category: "Gourmand",
                emoji: "🍛",
                img: CurryRamen,
                title: "Curry Ramen",
                ingredients: [
                    { color: "flag-red-fill", text: "Pâte de curry" },
                    { color: "flag-red-stroke", text: "Pommes de terre" },
                ]
            }
        },
        {
            recto: {
                img: CardLogo8
            },
            verso: {
                category: "Estival & rafraîchissant",
                emoji: "❄️",
                img: HiyashiChuka,
                title: "Hiyashi Chuka",
                ingredients: [
                    { color: "flag-red-fill", text: "Jambon ou poulet" },
                    { color: "flag-red-stroke", text: "Crevette" },
                ]
            }
        }
    ];

    const [actived, setActived] = useState(true);

    const toggle = () => {
        setActived(!actived)
    }

    useGSAP(() => {

        gsap.set(menuContentSwitchBtn.current, {
            y: 40
        })
        
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: menuContent.current,
                start: "top bottom",
                end: "top-=100 bottom",
                scrub: 1
            },
        });

        tl
        .to(menuContentSwitchBtn.current, {
            y: 0
        });

        const tl2 = gsap.timeline({
            scrollTrigger: {
                trigger: menuContent.current,
                start: "bottom center",
                end: "bottom-=100 center",
                scrub: 1
            },
        });

        tl2
        .to(menuContentSwitchBtn.current, {
            y: 40,
        });
        
        
        // gsap.to(".menu-content-switch-btn", {
        //     scrollTrigger: {
        //         trigger: ".menu-content",
        //         start: "bottom+=100 center",
        //         end: "bottom center",
        //         markers: true,
        //         id: "sortie"
        //     },
        //     y: 40,
        //     duration: 1
        // });
        
    })

    return { 
        menuList,
        actived,
        toggle,
        menuContentSwitchBtn,
        menuContent
    };
}