import React from "react";
import useContact from "@components/home/contact/contact.hook";

export default function Contact() {

    const { horaires, coords } = useContact();

    return(
        <section className="contact" id="contact">
            <h2 className="contact-title title-section">Contact</h2>

            <div className="contact-grid">

                <iframe  className="contact-grid-map" src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d10497.344072174199!2d2.3219159245491023!3d48.8708705918676!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sfr!2sfr!4v1715538403575!5m2!1sfr!2sfr" width="600" height="450" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                <div className="contact-grid-form">
                    <div className="contact-grid-form-group">
                        <input className="contact-grid-form-group-input" id="full-name" placeholder="Nom complet"/>
                        <input className="contact-grid-form-group-input" id="email" placeholder="Email"/>
                        <input className="contact-grid-form-group-input" id="phone" placeholder="Téléphone"/>
                        <input className="contact-grid-form-group-input" id="subject" placeholder="Sujet"/>
                        <textarea className="contact-grid-form-group-textarea" id="message" placeholder="Message"></textarea>
                    </div>

                    <button className="contact-grid-form-btn btn-primary-fill" id="btn-submit">Envoyer</button>
                </div>

                <div className="contact-grid-infos">
                    <div className="infos">
                        <div className="infos-title">Horaire</div>
                        
                        <div className="infos-content">
                            {horaires && horaires.map((horaire, key) => (
                                <span className="infos-content-title" key={key}>
                                    <span>{horaire.jour}</span>
                                    <span>{horaire.heures}</span>
                                </span>
                            ))}
                            
                        </div>
                    </div>

                    <div className="infos">
                        <div className="infos-title">Coordonnées</div>
                        
                        <div className="infos-content">
                            {horaires && coords.map((coord, key) => (
                                <React.Fragment key={key}>
                                    <span className="infos-content-title">{coord.title}</span>
                                    <span className="infos-content-text">{coord.text}</span>
                                </React.Fragment>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}