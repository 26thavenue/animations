import  "./styles.css"

interface IProject_One{
    title:string
    index:number 
    setModal : any
}

const Project = ({
    title,
    index,
    setModal
}: IProject_One) => {
  return (
    <div 
    className=" w-full  px-[100px]"
    onMouseEnter={() => {setModal(({active:true,index:index}))}}
    onMouseLeave={() => {setModal(({active:false,index:index}))}}
    >
        <div className="project hover:opacity-40">
            <h2 >{title}</h2>
            <p>Cities</p>
        </div>
       
    </div>
    
  )
}

export default Project