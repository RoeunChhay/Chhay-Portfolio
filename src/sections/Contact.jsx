import React from 'react'
import TitleHeader from '../components/TitleHeader'
import ContactForm from '../components/ContactForm'
import BoyForm from '../components/BoyForm'
import GradientSpheres from '../components/GradientSpheres'

const Contact = () => {
    return (
        <section id='contact' className='flex-center relative px-10'>
            <GradientSpheres sphere1Class={"about-gradient-sphere about-sphere-1"} sphere2Class={"about-gradient-sphere about-sphere-2"} />
            <div className="w-full h-full container md:my-40 my-20">
                <TitleHeader title={"Contact ME"} text={"Let's collaboration on tailored, sustainable solution."} number={"05"} />

                <div className="mt-20 relative">
                    <div className="grid grid-cols-12">
                        <div className="md:col-span-5 col-span-12">
                            <ContactForm />
                        </div>
                        <div className="md:col-span-7 col-span-12">
                            <div className="w-full md:h-full h-96 md:m-0 -mt-8">

                                <BoyForm className='object-cover size-15' />

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Contact
