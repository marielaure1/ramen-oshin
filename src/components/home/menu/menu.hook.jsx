import Plat1 from "@img/plat-01.jpg";
import Plat2 from "@img/plat-02.jpg";
import Plat3 from "@img/plat-03.jpg";
import Plat4 from "@img/plat-04.jpg";
import Plat5 from "@img/plat-05.jpg";
import Plat6 from "@img/plat-06.jpg";

export default function useMenu() {
    const menuList = [
        {
            flag: "",
            emoji: "🌶️",
            img: Plat1,
            title: "Ramen 01",
            text: "Ramen, poulet, oeufs"
        },
        {
            flag: "Vegan",
            emoji: "🌶️",
            img: Plat2,
            title: "Ramen 02",
            text: "Ramen, coriande, poivrons"
        },
        {
            flag: "",
            emoji: "🥣 🍚",
            img: Plat3,
            title: "Ramen 03",
            text: "Rix, saumon, avocat"
        },
        {
            flag: "Recette traditionnelle",
            emoji: "🌶️🌶️",
            img: Plat4,
            title: "Ramen 04",
            text: "Ramen, coriande, poivrons"
        },
        {
            flag: "",
            emoji: "🌶️🌶️",
            img: Plat5,
            title: "Ramen 05",
            text: "Ramen, coriande, poivrons"
        },
        {
            flag: "",
            emoji: "🌶️🌶️🌶️",
            img: Plat6,
            title: "Ramen 06",
            text: "Ramen, coriande, poivrons"
        },
        {
            flag: "",
            emoji: "🌶️🌶️",
            img: Plat1,
            title: "Ramen 07",
            text: "Ramen, coriande, poivrons"
        },
        {
            flag: "",
            emoji: "🌶️🌶️",
            img: Plat2,
            title: "Ramen 08",
            text: "Ramen, coriande, poivrons"
        }
    ]

    return { menuList };
}