import gsap from "gsap";
import { ScrollTrigger, MotionPathPlugin } from "gsap/all";
import { useGSAP } from "@gsap/react";
import Lenis from 'lenis';
import { useEffect } from "react";

if(typeof window !== "undefined"){
    gsap.registerPlugin(useGSAP);
    gsap.registerPlugin(ScrollTrigger);
    gsap.registerPlugin(MotionPathPlugin);
}

export const useAnimation = () => {
    useEffect(() => {
      const lenis = new Lenis({
        lerp: 0.05,
        wheelMultiplier: 0.4
      });

      lenis.on('scroll', ScrollTrigger.update);

      gsap.ticker.add((time) => {
        lenis.raf(time * 1000);
      });

      gsap.ticker.lagSmoothing(0);

    }, [])

    return {
      gsap
    }
    
}