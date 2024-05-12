import Image from "next/image";
import SocialMedia01 from "@img/social-media-01.jpg";
import SocialMedia02 from "@img/social-media-02.jpg";
import SocialMedia03 from "@img/social-media-03.jpg";

export default function SocialMedia() {
    return(
        <section className="social-media" id="social-media">
            <h2 className="social-media-title title-section">@ramenoshin</h2>

            <div className="social-media-grid">
                <div className="social-media-grid-media">
                    <Image className="social-media-grid-media-img" src={SocialMedia01} alt="instagram"/>
                </div>
                <div className="social-media-grid-media">
                    <Image className="social-media-grid-media-img" src={SocialMedia02} alt="instagram"/>
                </div>
                <div className="social-media-grid-media">
                    <Image className="social-media-grid-media-img" src={SocialMedia03} alt="instagram"/>
                </div>
            </div>
        </section>
    )
}