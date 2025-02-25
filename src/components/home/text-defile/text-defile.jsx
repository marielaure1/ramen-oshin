'use client'
import Image from 'next/image'
import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

export default function TextDefile() {
    const textDefile1 = "VENEZ VOUS REGALER CHEZ OSHIN";
    const textDefile2 = "BONNE APPETIT - どうぞ召し上がれ";

    return (
        <section className="text-defile" id="text-defile">
            <TextAnimation text={textDefile1}/>
            <TextAnimation text={textDefile2}/> 
        </section>
    )
}

function TextAnimation({ text }) {
    const firstText = useRef(null);
    const secondText = useRef(null);
    const slider = useRef(null);

    let xPercent = 0;

    useEffect( () => {
        gsap.set(secondText.current, {left: secondText.current.getBoundingClientRect().width})
        requestAnimationFrame(animate);
    }, [])

    const animate = () => {
        if(xPercent > 0){
            xPercent = -100;
        }

        gsap.set(firstText.current, {xPercent: xPercent})
        gsap.set(secondText.current, {xPercent: xPercent})
        requestAnimationFrame(animate);
        xPercent += 0.05
    }

    return (
        <div ref={slider} className="text-defile-container">
            <p ref={firstText} className="text-defile-container-text">{text}</p>
            <p ref={secondText} className="text-defile-container-text">{text}</p>
        </div>  
    )
}