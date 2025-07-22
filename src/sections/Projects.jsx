import React from 'react'
import GradientSpheres from '../components/GradientSpheres'
import TitleHeader from '../components/TitleHeader'
import Carousel from '../components/Carousel'
const Projects = () => {
  return (
    <section id='projects' className='w-full h-full flex-center relative px-10'>
      <GradientSpheres
        sphere1Class={"projects-gradient-sphere projects-sphere-1"}
        sphere2Class={"projects-gradient-sphere projects-sphere-2"}
      />

      <div className="w-full h-full md:my-40 my-20 relative z-10">
        <div className='container mx-auto'>
          <TitleHeader title={"My Projects"} text={"Check my recent project below for your Gaol"} number={"03"} />
        </div>
        <div className="md:mt-20 mt-10">
          <Carousel />
        </div>
      </div>
    </section>
  )
}

export default Projects
