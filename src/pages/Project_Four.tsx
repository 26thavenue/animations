import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";

gsap.registerPlugin(ScrollTrigger);

const Project_Four = () => {
  const textRef = useRef<HTMLParagraphElement | null>(null);

  useEffect(() => {
    if (!textRef.current) return;

    // Split the text into lines
    const split = new SplitType(textRef.current, { types: "lines" });

    // Animate each line
    split?.lines?.forEach((line) => {
      gsap.fromTo(
        line,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: line,
            start: "top 90%",
            end: "top 60%",
            scrub: 1,
          },
        }
      );
    });

    // Handle window resize
    const handleResize = () => {
      split.revert();
    //   split.split(); 
      ScrollTrigger.refresh(); 
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <main className="m-0 p-0">
      <div className="w-full h-[70vh] bg-red-100"></div>
      <div className="p-6">
        <p
          ref={textRef}
          className="text-[5vw] leading-[1.2] text-gray-800 font-semibold"
        >
          Nestled in the heart of Amsterdam, our creative studio is a hub for
          innovation, storytelling, and design. We are a collective of
          designers, artists, strategists, and technologists who craft
          compelling brand identities, immersive digital experiences, and
          forward-thinking campaigns.
        </p>
      </div>
    </main>
  );
};

export default Project_Four;
