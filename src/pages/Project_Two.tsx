// Text scroll slider

import {useRef,useEffect} from 'react'
import gsap from "gsap"
import { ScrollTrigger } from "gsap/all";

const Project_Two = () => {

  const firstText = useRef<HTMLParagraphElement | null>(null);
  const secondText = useRef<HTMLParagraphElement | null>(null);
  const slider = useRef<HTMLDivElement | null>(null);
  let xPercent = 0;
  let direction = -1;

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(slider.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        scrub: 0.25,
        start: 0,
        end: window.innerHeight,
        onUpdate: (e) => (direction = e.direction * -1),
      },
      x: "-500px",
    });

    requestAnimationFrame(animate);
  }, []);

  const animate = () => {
    if (xPercent < -100) {
      xPercent = 0;
    } else if (xPercent > 0) {
      xPercent = -100;
    }

    gsap.set(firstText.current, { xPercent });
    gsap.set(secondText.current, { xPercent });

    requestAnimationFrame(animate);
    xPercent += 0.1 * direction;
  };
  return (
 
         <main className="relative flex h-screen mb-[100vh] overflow-hidden">
     
      
      <img 
            src="https://images.unsplash.com/36/rv1BIw0tSKi0xLtGrpR0_TE3_0185.jpg?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZGFyayUyMGJlYWNofGVufDB8fDB8fHww" 
            alt="City"
            className='absolute inset-0 w-full h-full object-cover'
            />

      {/* Scrolling Text */}
      <div className="absolute top-[calc(100vh-350px)] overflow-hidden">
        <div ref={slider} className="relative whitespace-nowrap">
          <p ref={firstText} className="relative m-0 text-white text-[230px] font-medium pr-[50px]">
            Lagos, Nigeria 
          </p>
          <p ref={secondText} className="absolute left-full top-0 m-0 text-white text-[230px] font-medium pr-[50px]">
            Lagos, Nigeria
          </p>
        </div>
      </div>
    </main>
  
  )
}

export default Project_Two