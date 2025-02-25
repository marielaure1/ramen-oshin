"use client"

import Header from "@components/home/header/header";
import About from "@components/home/about/about";
import MotionPathAnimation from "@/components/home/motion-path-animation/motion-path-animation";
import Menu from "@components/home/menu/menu";
import Gallery from "@components/home/gallery/gallery";
import TextDefile from "@components/home/text-defile/text-defile";
import Footer from "@components/home/footer/footer";
import { useEffect, useRef } from "react";
import { useAnimation } from "@/utils/animation.util";
import "@theme/index.css";
import 'lenis/dist/lenis.css'

export default function Home() {
  const { gsap } = useAnimation();
  const pageRef = useRef();

  useEffect(() => {
    window.scrollTo(0, 0);

    gsap.set(document.body, {
      "--background": "#FDF6DE",
      "--color": "#F43233"
    });

    const tl = gsap.timeline();

    tl.to(
      document.body,
      {
        scrollTrigger: {
            trigger: "#about .title-section",
            start: "top center",
            end: "top+=200 center",
            scrub: true,
        },
        duration: 1,
        "--background": "#F43233",
        "--color": "#FFFFFF",
        onComplete: () => {
          tl.to(
            document.body,
            {
              scrollTrigger: {
                  trigger: "#menu",
                  start: "top bottom",
                  end: "top center",
                  scrub: true,
              },
              "--background": "#FFFFFF",
              "--color": "#F43233",
              onComplete: () => {
                tl.to(
                  document.body,
                  {
                    scrollTrigger: {
                        trigger: "#text-defile",
                        start: "top bottom",
                        end: "top center",
                        scrub: true,
                        id: "menu"
                    },
                    "--background": "#FDF6DE",
                    "--color": "#F43233"
                  }
                );
              }
            }
          );
        }
      }
    );

    return () => {
      tl.kill();
    };
  }, []);
  
  return (
    <main ref={pageRef} className="home"> 
      <Header gsap={gsap} pageRef={pageRef}/>
      <About gsap={gsap}/>
      <MotionPathAnimation gsap={gsap}/>
      <Menu/>
      <Gallery gsap={gsap}/>
      <TextDefile gsap={gsap}/>
      <Footer/>
    </main>
  );
}
