"use client";

import CardLogo1 from "@img/card-logo1.svg";
import CardLogo2 from "@img/card-logo2.svg";
import CardLogo3 from "@img/card-logo3.svg";
import CardLogo4 from "@img/card-logo4.svg";
import CardLogo5 from "@img/card-logo5.svg";
import CardLogo6 from "@img/card-logo6.svg";
import CardLogo7 from "@img/card-logo7.svg";
import CardLogo8 from "@img/card-logo8.svg";
import { useState } from "react";
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
                    { color: "flag-red-fill", text: "Chashu (porc braisé)" },
                    { color: "flag-red-stroke", text: "Kikurage (champignons noirs)" },
                    { color: "flag-red-stroke", text: "Oignons nouveaux" }
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
                    { color: "flag-red-fill", text: "Menma (bambou fermenté)" },
                    { color: "flag-red-stroke", text: "Œuf mariné" },
                    { color: "flag-red-stroke", text: "Narutomaki (surimi)" }
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
                    { color: "flag-red-stroke", text: "Beurre" },
                    { color: "flag-red-stroke", text: "Chashu (porc braisé)" }
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
                    { color: "flag-red-fill", text: "Œuf mariné" },
                    { color: "flag-red-stroke", text: "Algue Nori" },
                    { color: "flag-red-stroke", text: "Épaules de porc effilochées" }
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
                    { color: "flag-red-fill", text: "Crevettes ou fruits de mer" },
                    { color: "flag-red-stroke", text: "Wakame (algues)" },
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
                    { color: "flag-red-fill", text: "Viande de porc hachée épicée" },
                    { color: "flag-red-stroke", text: "Huile de sésame pimentée" },
                    { color: "flag-red-stroke", text: "Cacahuètes ou graines de sésame" }
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
                    { color: "flag-red-fill", text: "Pâte de curry japonais" },
                    { color: "flag-red-stroke", text: "Pommes de terre" },
                    { color: "flag-red-stroke", text: "Carottes" }
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
                    { color: "flag-red-fill", text: "Jambon ou poulet effiloché" },
                    { color: "flag-red-stroke", text: "Concombre" },
                    { color: "flag-red-stroke", text: "Sauce vinaigrée sucrée" }
                ]
            }
        }
    ];

    const [actived, setActived] = useState(true);

    const toggle = () => {
        setActived(!actived)
    }

    useGSAP(() => {
        
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".menu-content",
                start: "top bottom",
                end: "top-=100 bottom"
            },
        });

        tl
        .from(".menu-content-switch-btn", {
            y: 40
        })
        .to(".menu-content-switch-btn", {
            y: 0
        });

        const tl2 = gsap.timeline({
            scrollTrigger: {
                trigger: ".menu-content",
                start: "bottom center",
                end: "bottom-=100 center"
            },
        });

        tl2
        .to(".menu-content-switch-btn", {
            y: 40,
        });
        
        
        // gsap.to(".menu-content-switch-btn", {
        //     scrollTrigger: {
        //         trigger: ".menu-content",
        //         start: "bottom center",
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
        toggle
    };
}