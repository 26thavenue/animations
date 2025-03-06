import { useState } from 'react'
import Project from './pages/Project_One'
import Modal from './components/Project_One/modal'
import './App.css'

function App() {
  const [modal, setModal] = useState({active:false,index:0})

  const projects =[
    {
      title:"Lagos ",
      src:"https://images.unsplash.com/photo-1550969026-f069940eedae?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dgraphy-of-bridge-q4ZBGVzJskE",
      color: "#000000"
    },
    {
      title:"Monaco",
      src:"https://images.unsplash.com/photo-1570003550321-14dd053a5956?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dings-near-body-of-water-UCtP4syENic",
      color: "#8c8c8c"
    },
    {
      title:"London",
      src:"https://plus.unsplash.com/premium_photo-1661963258031-211e16a9426a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D.com/photos/the-iconic-british-old-red-telephone-box-with-the-big-ben-at-background-in-the-center-of-london-FzB2nESZEkk",
      color: "#EFE8D3"
    },
    {
      title:"Paris",
      src:"https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dlash.com/photos/eiffel-tower-during-daytime-Q0-fOL2nqZc",
      color: "#706D63"
    },
  ]

  return (
    <main className="flex items-center justify-center w-full  h-[100dvh]">
      <div className='  flex items-center justify-center flex-col w-full'>
        {projects.map((project,index) =>(
          <Project 
            key={index}
            index={index}
            title={project.title}
            setModal={setModal}
          />
        ))}
      </div>
      <Modal modal={modal} projects={projects}/>
    </main>
  )
}

export default App
