import { useEffect, useState } from "react";

export const useScreen = () => {
    const [screen, setScreen] = useState({
        width: 0,
        height: 0,
        format: "desktop"
    });

    const handleResize = () => {
        let format = "desktop";

        if(window.innerWidth <= 576){
            format = "mobile";
        } else if(window.innerWidth <= 1024){
            format = "tablet";
        }

        setScreen({
            width: window.innerWidth,
            height: window.innerHeight,
            format
        });
    };
    
    useEffect(() => {
        handleResize();

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        }

    }, [])
    
    return {
        screen
    }
}