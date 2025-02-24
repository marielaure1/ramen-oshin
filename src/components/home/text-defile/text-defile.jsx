'use client'
import Image from 'next/image'
import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

export default function TextDefile() {
    const textDefile1 = "VENEZ VOUS REGALER CHEZ RAMEN OSHIN";
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
    // let xPercent = 0;
    // let direction = -1;

    // useEffect( () => {
    //     gsap.registerPlugin(ScrollTrigger);
    //     gsap.to(slider.current, {
    //         scrollTrigger: {
    //             trigger: document.documentElement,
    //             scrub: 0.25,
    //             start: 0,
    //             end: window.innerHeight,
    //             onUpdate: e => direction = e.direction * -1
    //         },
    //         x: "-500px",
    //     })
    //     requestAnimationFrame(animate);
    // }, [])

    // const animate = () => {
    //     if(xPercent < -100){
    //         xPercent = 0;
    //     } else if(xPercent > 0){
    //         xPercent = -100;
    //     }
    //     gsap.set(firstText.current, {xPercent: xPercent})
    //     gsap.set(secondText.current, {xPercent: xPercent})
    //     requestAnimationFrame(animate);
    //     xPercent += 0.1 * direction;
    // }

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

  xPercent += 0.05;

}

    return (
        <div ref={slider} className="text-defile-container">
            <p ref={firstText} className="text-defile-container-text">{text}</p>
            <p ref={secondText} className="text-defile-container-text">{text}</p>
        </div>  
    )
}