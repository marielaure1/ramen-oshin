"use client"

import Image from "next/image";
import { IterationCw } from 'lucide-react';
import useMenu from "@components/home/menu/menu.hook";
import { TitleSection } from "@components/common/title-section";
import { Flag } from "@components/common/flag";

export default function Menu() {

    const { 
        menuList,
        actived,
        toggle,
        menuContentSwitchBtn,
        menuContent
    } = useMenu();
 
    return(
        <section className="menu" id="menu">
            <TitleSection title="Découvrez notre menu" />
            <div ref={menuContent} className="menu-content">
                <div className={`menu-content-grid ${actived ? "actived" : "desactived"}`}>
                    {menuList && menuList.map((plat, key) => (
                    <div className="card" key={key}>
                        <div className="card-recto">
                            <Image src={plat.recto.img} alt={plat.verso.title} width={500} height={500} />
                        </div>
                        <div className="card-verso plat">
                            <div className="plat-top">
                                <span className="plat-top-category">{plat.verso.category}</span>
                                <span className="plat-top-emoji">{plat.verso.emoji}</span>
                            </div>
                            <div className="plat-center">
                                <Image className="plat-center-img" src={plat.verso.img} alt={plat.verso.title} width={500} height={500}/>
                            </div>
                            <div className="plat-bottom">
                                <h3 className="plat-bottom-title">{plat.verso.title}</h3>
                                <div className="plat-bottom-ingredients">
                                    {plat.verso.ingredients.map((ingredient, i) => (
                                        <Flag key={i} color={ingredient.color} text={ingredient.text}/>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    ))}
                </div>
                <div className="menu-content-switch">
                    <button ref={menuContentSwitchBtn} onClick={toggle} className={`menu-content-switch-btn ${actived ? "" : "active"}`}>
                        <IterationCw size={18} />
                    </button>
                </div>
            </div>
        </section>
    )
}