import React from 'react'
import GradientSpheres from '../components/GradientSpheres'

import ChhayHero from '../components/ChhayHero'

const Hero = () => {
  return (
    <section id='home' className=' h-dvh relative text-white-50 px-10 md:p-0'>
      <GradientSpheres sphere1Class={"gradient-sphere sphere-1"} sphere2Class={"gradient-sphere sphere-2"} />
     
      <div className="w-ful h-full flex-center md:mx-8">
        <div className="container relative w-full h-full">
          <div className="md:mt-40 mt-20">
            <p className='font-medium md:text-2xl text-base'>Hey, I'm frontend deverloper</p>
            <h1 className='font-bold xl:text-9xl md:text-8xl text-5xl'>CHHAY ROEUN</h1>
            <h1 className='font-bold xl:text-9xl md:text-8xl text-5xl'>CREATIVE</h1>
          </div>

          <div className="absolute w-full z-30 bottom-20 right-0">
            <div className="flex justify-between items-end">
              <div className='flex flex-col items-center md:gap-5 gap-1'>
                <p className='md:text-base text-2xl'>Explore</p>
                <img className='size-7 animate-bounce' src="/images/arrowdown.svg" alt="arrowdown" />
              </div>

              <div className='flex flex-col items-end -px-3'>
                <img src="/images/shape.svg" alt="shape" />
                <h1 className='font-bold xl:text-9xl md:text-8xl text-5xl'>DEVERLOPER</h1></div>
            </div>
          </div>
        </div>      
      </div>

       <div className="w-full h-full absolute inset-0">
        <ChhayHero/>
       </div>
    </section>
  )
}

export default Hero
