import React from "react";
import useFooter from "@components/home/footer/footer.hook";
import Image from "next/image";
import Link from "next/link";
import Logo from "@/assets/img/logo.svg";

export default function Footer() {

    const { horaires, coords } = useFooter();

    return(
        <footer className="footer" id="footer">

            <div className="footer-grid footer-grid-1">
                <div className="footer-card bg-red-01">
                    <Image src={Logo} alt="Ovni" width={200} height={200} />
                </div>
                <div className="footer-card">
                    <div className="contact-form">
                        <div className="contact-form-group">
                            <input className="contact-form-group-input" id="full-name" placeholder="Nom complet"/>
                            <input className="contact-form-group-input" id="email" placeholder="Email"/>
                            <textarea className="contact-form-group-textarea" id="message" placeholder="Message"></textarea>
                        </div>

                        <button className="contact-form-btn btn-primary-fill" id="btn-submit">Envoyer</button>
                    </div>
                </div>

            </div>
            <div className="footer-grid footer-grid-2">
                <div className="footer-card">
                    <h3 className="footer-card-title">Téléphone</h3>
                    <p className="footer-card-text">01 23 45 67 89</p>
                </div>
                <div className="footer-card">
                    <h3 className="footer-card-title">Adresse </h3>
                    <p className="footer-card-text">18 rue de Nowhere, 75019 Paris</p>
                </div>
                <div className="footer-card">
                    <h3 className="footer-card-title">Email</h3>
                    <p className="footer-card-text">hello@ramenoshin.com</p>
                </div>
                <div className="footer-card">
                    <h3 className="footer-card-title">Ouverture</h3>
                    <p className="footer-card-text">
                        Du lundi au samedi de 11h à 21h
                    </p>
                </div>
            </div>
            <div className="footer-bottom">
                <p className="footer-bottom-text">Copyright 2024 - {new Date().getFullYear()} - Tous droits réservés. Réalisé par <Link href="https://marie-laure-edjour.com/" className="link-developer">Marie-Laure Edjour</Link></p>
            </div>
        </footer>
    )
}