"use client"

import Image from "next/image";
import { TitleSection } from "@components/common/title-section";
import { useGallery } from "@components/home/gallery/gallery.hook";

export default function Gallery({ gsap }) {
    const { galleries, containerRef, mediasRef } = useGallery({ gsap });
    
    return(
        <section ref={containerRef} className="gallery" id="gallery">
            <TitleSection title="@oshin" position="left"/>

            <div className="gallery-container">
                <div ref={mediasRef} className="gallery-container-medias">
                    {galleries
                    .map((gallery, i) => (
                        <div key={i} className="gallery-media">
                            <Image className="gallery-media-img" src={gallery.img} alt={gallery.alt} width={500} height={500}/>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}