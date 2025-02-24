"use client"

import Plat1 from "@img/plat-01.jpg";
import Plat2 from "@img/plat-02.jpg";
import Plat3 from "@img/plat-03.jpg";
import Plat4 from "@img/plat-04.jpg";
import Plat5 from "@img/plat-05.jpg";
import Plat6 from "@img/plat-06.jpg";
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

export default function useMenu() {
    const { gsap } = useAnimation();

    const menuList = [
        {
            recto: {
                img: CardLogo1
            },
            verso: {
                category: "",
                emoji: "🌶️",
                img: Plat1,
                title: "Ramen 01",
                ingredients: [
                    {
                        color: "flag-red-fill",
                        text: "Ramen"
                    },
                    {
                        color: "flag-red-stroke",
                        text: "poulet"
                    },
                    {
                        color: "flag-red-stroke",
                        text: "oeufs"
                    },
                ]
            }
        },
        {
            recto: {
                img: CardLogo2
            },
            verso: {
                category: "Vegan",
                emoji: "🌶️",
                img: Plat2,
                title: "Ramen 02",
                ingredients: [
                    {
                        color: "flag-red-fill",
                        text: "Ramen"
                    },
                    {
                        color: "flag-red-stroke",
                        text: "coriande"
                    },
                    {
                        color: "flag-red-stroke",
                        text: "poivrons"
                    },
                ]
            }
        },
        {
            recto: {
                img: CardLogo3
            },
            verso: {
                category: "",
                emoji: "🥣 🍚",
                img: Plat3,
                title: "Ramen 03",
                ingredients: [
                    {
                        color: "flag-red-fill",
                        text: "Riz"
                    },
                    {
                        color: "flag-red-stroke",
                        text: "saumon"
                    },
                    {
                        color: "flag-red-stroke",
                        text: "avocat"
                    },
                ]
            }
        },
        {
            recto: {
                img: CardLogo4
            },
            verso: {
                category: "Recette traditionnelle",
                emoji: "🌶️🌶️",
                img: Plat4,
                title: "Ramen 04",
                ingredients: [
                    {
                        color: "flag-red-fill",
                        text: "Ramen"
                    },
                    {
                        color: "flag-red-stroke",
                        text: "coriande"
                    },
                    {
                        color: "flag-red-stroke",
                        text: "poivrons"
                    },
                ]
            }
        },
        {
            recto: {
                img: CardLogo5
            },
            verso: {
                category: "",
                emoji: "🌶️🌶️",
                img: Plat5,
                title: "Ramen 05",
                ingredients: [
                    {
                        color: "flag-red-fill",
                        text: "Ramen"
                    },
                    {
                        color: "flag-red-stroke",
                        text: "coriande"
                    },
                    {
                        color: "flag-red-stroke",
                        text: "poivrons"
                    },
                ]
            }
        },
        {
            recto: {
                img: CardLogo6
            },
            verso: {
                category: "",
                emoji: "🌶️🌶️🌶️",
                img: Plat6,
                title: "Ramen 06",
                ingredients: [
                    {
                        color: "flag-red-fill",
                        text: "Ramen"
                    },
                    {
                        color: "flag-red-stroke",
                        text: "coriande"
                    },
                    {
                        color: "flag-red-stroke",
                        text: "poivrons"
                    },
                ]
            }
        },
        {
            recto: {
                img: CardLogo7
            },
            verso: {
                category: "",
                emoji: "🌶️🌶️",
                img: Plat1,
                title: "Ramen 07",
                ingredients: [
                    {
                        color: "flag-red-fill",
                        text: "Ramen"
                    },
                    {
                        color: "flag-red-stroke",
                        text: "coriande"
                    },
                    {
                        color: "flag-red-stroke",
                        text: "poivrons"
                    },
                ]
            }
        },
        {
            recto: {
                img: CardLogo8
            },
            verso: {
                category: "",
                emoji: "🌶️🌶️",
                img: Plat2,
                title: "Ramen 08",
                ingredients: [
                    {
                        color: "flag-red-fill",
                        text: "Ramen"
                    },
                    {
                        color: "flag-red-stroke",
                        text: "coriande"
                    },
                    {
                        color: "flag-red-stroke",
                        text: "poivrons"
                    },
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