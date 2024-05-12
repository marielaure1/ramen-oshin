"use client"
import Image from "next/image";
import Apropos1 from "@img/a-propos-01.jpg";
import Apropos2 from "@img/a-propos-02.jpg";
import ImageAnimation from "@components/common/image";
import 'animate.css';

export default function About() {

    return(
        <section className="about" id="about">
            <div className="about-domino">
                <div className="about-domino-media">
                    <ImageAnimation className="about-domino-media-img" src={Apropos1} alt="Restaurant" />
                </div>
                <div className="about-domino-content">
                    <h2 className="title-section wow animate__fadeInUp">A propos</h2>
                    <p className="about-domino-content-text">Bienvenue chez Ramen Oshin. Plongez dans une expérience culinaire unique, où notre dévouement à l'art du ramen se traduit par des bols fumants de délices savoureux. Explorez notre menu élaboré, imprégné des saveurs riches et des traditions héritées du Japon. </p>
                </div>
            </div>

            <div className="about-domino">
                <div className="about-domino-content">
                    <h2 className="title-section">A propos</h2>
                    <p className="about-domino-content-text">Bienvenue chez Ramen Oshin. Plongez dans une expérience culinaire unique, où notre dévouement à l'art du ramen se traduit par des bols fumants de délices savoureux. Explorez notre menu élaboré, imprégné des saveurs riches et des traditions héritées du Japon. </p>
                </div>
                <div className="about-domino-media">
                    <ImageAnimation className="about-domino-media-img" src={Apropos2} alt="Restaurant" />
                </div>
            </div>
        </section>
    )
}