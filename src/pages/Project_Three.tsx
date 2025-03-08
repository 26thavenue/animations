// Sticky Footer

import { Footer,Intro } from "../components/Project_Three"
import { useEffect } from "react";
import Lenis from 'lenis';

const Project_Three = () => {
    useEffect( () => {
        const lenis = new Lenis()

        function raf(time:any) {
            lenis.raf(time)
            requestAnimationFrame(raf)
        }

    requestAnimationFrame(raf)
  }, [])
  return (
    <main>
      <Intro />
      <Footer />
    </main>
  )
}

export default Project_Three