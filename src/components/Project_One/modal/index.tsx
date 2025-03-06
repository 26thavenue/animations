import "./styles.css"
import {motion} from "framer-motion"
import gsap from "gsap"
import {useEffect,useRef} from 'react'

interface IModal{
    modal: any
    projects:any[]
}

const scaleAnimation ={
    initial:{scale:0, x:"-50%", y:"-50%"},
    open:{scale:1, x:"-50%", y:"-50%", transition:{duration:0.4, ease:[0.76, 0,0.24, 1]}},
    closed:{scale:0, x:"-50%", y:"-50%", transition:{duration:0.4, ease:[0.32, 0, 0.67, 0]}},
}

const Modal = ({modal,projects}:IModal) => {

  const{active,index} = modal
  const container =useRef(null)

  useEffect(()=>{
    const moveContainerX = gsap.quickTo(container.current,"left",{duration:0.8,ease:"power3"})
    const moveContainerY = gsap.quickTo(container.current,"top",{duration:0.8,ease:"power3"})


    window.addEventListener("mousemove", (e) =>{
        const {clientX,clientY} = e;
        moveContainerX(clientX)
        moveContainerY(clientY)
    })
  },[])

  return (
    <motion.div ref={container} variants={scaleAnimation} initial={"initial"} animate={ active ? "open" :"closed"} className="h-[350px] w-[400px] flex items-center justify-center absolute overflow-hidden pointer-events-none">
        <div style={{top: index * - 100 + "%"}} className="h-full w-full absolute modal">
           { 
                projects.map((project,index) => {
                    const {src,color} = project
                    return(
                            <div key={index} className=" modal relative h-full flex items-center justify-center " style={{backgroundColor:color}}>
                                <img src={src} className="w-[300px] h-[250px] object-cover" alt="image"/>
                            </div>
                        )
            })
            }
        </div>
    </motion.div>
  )
}

export default Modal