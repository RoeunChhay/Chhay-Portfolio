import React, { useState } from 'react'
import { slides } from '../constants'
import { useGSAP } from "@gsap/react";
import gsap from 'gsap';


const Carousel = () => {
   const [currentSlide, setCerrentslide] = useState(0);
   const prevSlide = () => {
    setCerrentslide((prev) => (prev - 1 + slides.length) % slides.length);
   };

   const nextSlide = () => {
    setCerrentslide((prev) => (prev + 1) % slides.length);
   }; 
   


   useGSAP(() => {
  gsap.to(".slider-item", { // Corrected: removed comma, added {
    x: `-${currentSlide * 63}vw`,
    opacity: 1, // Note: Setting opacity to 1 here might not be what you intend if items are already visible. You might want to animate opacity from 0 or to 0 depending on your design.
    duration: 1.2,
    ease: "expo.out"
}); 
 gsap.fromTo(`.slider-item:nth-child(${currentSlide + 2}) img`, 
    {scale: 3},
    {scale: 1, duration: 1.5, ease: "power2.out"}

 )
   },[currentSlide]);

    return (
        <div className='relative'>
            <div className="w-full relative lg:h-[60vh] md:h-[40vh] h-[60vh]">
                <div className="absolute w-full -left-[45vw] top-0">
                    <div className="flex w-full lg:h-[60vh] md:h-[40vh] h-[60vh] items-center gap-[3vw]">
                        {
                            slides.map((slide, index) => (
                                <div key={index} className='slider-item w-[60vw] h-full flex-none relative overflow-clip'>
                                    <img src={slide.img} alt="slide" className='w-full h-full object-cover object-center' />

                                    <div className="absolute w-full h-20 bottom-0 left-0 bg-black-300 bg-opacity-100 px-5">
                                        <div className="flex h-full justify-between items-center group cursor-pointer">
                                            <div className="flex-center gap-2">
                                                <p>{index}</p>
                                                <p>{slide.title}</p>
                                            </div>
                                            <div className="flex-center gap-2">
                                                <p>Preview Project</p>
                                                <img src="/images/arrowupright.svg" alt="arrowup"
                                                    className='md:size-10 size-7 group-hover:-translate-y-4 transition-transform' />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                            ))
                        }
                        {
                            slides.map((slide, index) => (
                                <div key={index} className='slider-item w-[60vw] h-full flex-none relative overflow-clip'>
                                    <img src={slide.img} alt="slide" className='w-full h-full object-cover object-center' />

                                    <div className="absolute w-full h-20 bottom-0 left-0 bg-black-300 bg-opacity-100 px-5">
                                        <div className="flex h-full justify-between items-center group cursor-pointer">
                                            <div className="flex-center gap-2">
                                                <p>{index}</p>
                                                <p>{slide.title}</p>
                                            </div>
                                            <div className="flex-center gap-2">
                                                <p>Preview Project</p>
                                                <img src="/images/arrowupright.svg" alt="arrowup"
                                                    className='md:size-10 size-7 group-hover:-translate-y-4 transition-transform' />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                            ))
                        }
                    </div>

                </div>
            </div>

            <div className="flex mt-10 text-white-50 justify-end gap-5 md:-translate-x-32 -translate-x-5">
                <div onClick={prevSlide} className="rounded-full cursor-pointer bg-blue-50 hover:bg-pink-100 active:scale-90 transition-all w-12 h-12 flex-center">
                    <img src="/images/CaretLeft.svg" alt="left" />
                </div>
                <div onClick={nextSlide} className="rounded-full cursor-pointer bg-blue-50 hover:bg-pink-100 active:scale-90 transition-all w-12 h-12 flex-center">
                    <img src="/images/CaretRight.svg" alt="right" />
                </div>
            </div>
        </div>
    )
}

export default Carousel
