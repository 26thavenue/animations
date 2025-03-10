import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import SplitType from "split-type";

const LineAnimation = () => {
  const textRef = useRef(null);

  useEffect(() => {
    if (textRef.current) {
      // Split the text into characters using SplitType
      const myText = new SplitType(textRef.current, { types: "chars" });

      
      myText?.chars.forEach((char) => {
        char.style.transform = "translateY(115px)";
        char.style.transition = "transform 0.5s";
      });

      // GSAP animation for each character
      gsap.to(myText.chars, {
        y: 0,
        stagger: 0.05,
        delay: 0.2,
        duration: 0.1,
        ease: "power3.out",
      });
    }
  }, []);

  return (
    <header className="grid place-content-center h-screen">
      <h1
        ref={textRef}
        className="text-7xl uppercase font-bebas-neue leading-[5.9rem]"
        style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)" }}
      >
        Advanced AI
      </h1>
    </header>
  );
};

export default LineAnimation;