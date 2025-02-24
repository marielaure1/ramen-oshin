"use client"

import Image from "next/image";
import Apropos3 from "@img/ramen.jpg";
import { useAbout } from "@components/home/about/about.hook";
import { TitleSection } from "@components/common/title-section";
import { Flag } from "@components/common/flag";
import { TextReading } from "@/components/common/text-reading";

export default function About({ gsap }) {

    const {
        etablishments,
        containerRef,
        text1Ref,
        text2Ref,
        text3Ref,
        texts
    } = useAbout({ gsap });

    return(
        <section ref={containerRef} className="about" id="about">
            <div className="about-intro">
                <div className="about-intro-left">
                    <div className="about-intro-container">
                        <p ref={text1Ref} className="about-intro-left-text about-line text-md">
                            Plongez dans un cadre inspiré du Japon, entre minimalisme, douceur et convivialité.
                        </p>
                    </div>
                    <div className="about-intro-container">
                        <div className="about-intro-left-img">
                            <Image src={Apropos3} alt="Ramen Oshin" />
                        </div>
                    </div>
                </div>
                <div className="about-intro-right">
                    <h2 ref={text2Ref} className="about-line title-lg uppercase">Un savoir-faire artisanal</h2>
                    <p ref={text3Ref} className="about-line text-md">
                        Nous sélectionnons avec soin des produits frais et authentiques pour garantir des saveurs pures et raffinées. Nos chefs passionnés mettent en avant l’art de la cuisine japonaise à travers des plats faits maison, préparés avec précision et amour.
                    </p>
                </div>
            </div>
            <TitleSection title="Notre histoire"/>
            <div className="about-text">
                <TextReading text={texts.story[0]}/>
                <TextReading text={texts.story[1]}/>
            </div>
            <div className="about-list">
                {etablishments?.map((etablishment, index) => (
                    <div key={index} className={`about-card`}>
                        <div className="about-card-media">
                            <div className="about-card-media-img">
                                <Image src={etablishment.img} alt={etablishment.title} />
                            </div>
                        </div>
                        <div className="about-card-content">
                            <h3 className="about-card-content-title title-md">{etablishment.title}</h3>
                            <div className="about-card-content-flex">
                                {etablishment?.flags?.map((flag, i) => (
                                    <Flag key={i} color={flag.color} text={flag.text}/>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}