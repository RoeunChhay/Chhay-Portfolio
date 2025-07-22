import * as React from 'react';

import GradientSpheres from '../components/GradientSpheres'
import TitleHeader from '../components/TitleHeader'
import { Alien } from '../components/Alien'
import { Canvas } from '@react-three/fiber'

import { bentoSocialLinks } from '../constants'
import { OrbitControls } from '@react-three/drei'





const About = () => {
  return (
    <section id='about' className='flex-center relative md:px-0 px-10'>
      <GradientSpheres sphere1Class={"about-gradient-sphere about-sphere-1"} sphere2Class={"about-gradient-sphere about-sphere-2"} />
      <div className="container w-full h-full relative z-10 md:mx-8 md:my-40 my-20">
        <TitleHeader title={"About ME"} text={"Passionate creator, Lifelong Leaner"} number={"01"} />

        <div className="md:mt-20 mt-10">
          <div className="grid grid-cols-12 md:grid-rows-12 gap-5">

            <div className="md:col-span-7 col-span-12 row-span-5">
              <div className="bg-black-300 backdrop-blur-none rounded-2xl p-7 w-full h-full">
                <div>
                  <img src="/images/flower.svg" alt="flower"
                    className='md:w-40 w-30 flower animate-spin scale-125' />
                </div>
                <div className='mt-5'>
                  <h1 className='text-blue-50 md:text-5xl text-3xl'>Chhay Sa Roeun</h1>
                  <p className='md:text-2xl mt-2'>I'm a Computer Science student seeking a front-end developer internship to apply foundational knowledge of web development (HTML, CSS, JavaScript, ReactJs, NextJs) and contribute to building engaging, user-friendly digital experiences.
                  </p>
                </div>
              </div>
            </div>
            {/** 3d cute alien */}
            <div className="md:col-span-5 col-span-12 row-span-5">
              <div className="bg-[#c8d751] hover:cursor-grab w-full md:h-full h-60 rounded-2xl">
                <div className='w-full h-full'>
                  <Canvas className='animate-bounce'>
                    <OrbitControls enableZoom={false} />
                    <Alien scale={2}
                      position={[0, -5.5, 0]}
                      rotation={[0, -0.5, 0]} />
                  </Canvas>
                </div>
              </div>
            </div>


            {/** Web Design card */}

            <div className="md:col-span-6 col-span-12 row-span-3">
              <div className="bg-black-300 rounded-2xl p-7 w-full h-full">
                <div className="flex flex-col h-full justify-center gap-2">
                  <h1 className='gradient-title md:text-3xl text-2xl'>Web Design & Dev</h1>
                  <p className='md:text-xl max-w-96'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia, ad veritatis culpa, minus aspernatur cum reiciendis, tempora necessitatibus maiores eius rerum!</p>
                </div>
              </div>
            </div>

            {/** UX/UI Design */}
            <div className="md:col-span-6 col-span-12 row-span-3">
              <div className="bg-black-300 rounded-2xl p-7 w-full h-full">
                <div className="flex flex-col h-full justify-center gap-2">
                  <h1 className='gradient-title md:text-3xl text-2xl'>UX/UI Design</h1>
                  <p className='md:text-xl max-w-96'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia, ad veritatis culpa, minus aspernatur cum reiciendis, tempora necessitatibus maiores eius rerum!</p>
                </div>
              </div>
            </div>

            {/** Moti Design */}
            <div className="md:col-span-4 col-span-12 row-span-4">
              <div className="bg-black-300 rounded-2xl p-7 w-full h-full">
                <div className="flex flex-col justify-between h-full">
                  {
                    [
                      "BE YOURSELF",
                      "BE DIFERENT!",
                      "BUILD DIFERENT!"
                    ].map(
                      (text, index) => (
                        <h1 key={index} className='gradient-title md:text-5xl text-3xl font-bold'>{text}</h1>
                      )
                    )
                  }
                </div>
              </div>
            </div>

            {/** Button socail linke */}
            {
              bentoSocialLinks.map((item, index) => (
                <div key={index}
                  className='md:col-span-4 col-span-6 row-span-2'>
                  <div className='bg-black-300 rounded-2xl p-7 w-full h-full group cursor-pointer'>
                    <div className='flex justify-between items-center h-full' >
                      <div className='md:flex md:gap-3 gap-2'>
                        <img src={item.icon} alt={item.index} className='md:mx-0 mx-8' />
                        <p className='gradient-title md:text-3xl text-xl md:m-0 ms-5 font-medium md:mx-0 mx-1'>{item.name}</p>
                      </div>
                      <div className='xl:block group-hover:translate-x-2 group-hover:-translate-y-4 transition-transform'>
                        <a href={item.href}><img src="/images/arrowupright.svg" alt="" /></a>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </div>

    </section>
  )
}

export default About
