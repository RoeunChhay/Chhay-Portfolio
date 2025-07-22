import React from 'react'
import TitleHeader from '../components/TitleHeader'
import TechIcon from '../components/TechIcon'
import { iconsList } from '../constants'
    


const TechStack = () => {
    return (

        <div className="w-full h-full pt-20">
            <div className="">
                <div className="container mx-auto px-10">
                    <TitleHeader
                        title={"Tect Stack"}
                        number={"02"}
                        text={"My Go-To Tools For Crafting Solution"}
                    />
                </div>
                <div className="md:mt-20 relative">
                    <div className="marquee h-52">
                        <div className="marquee-box md:gap-12 gap-5">
                            {
                                iconsList.map((icon, index) => (
                                    <TechIcon key={index} icon={icon} />
                                ))}
                            {
                                iconsList.map((icon, index) => (
                                    <TechIcon key={index} icon={icon} />
                                ))}
                        </div>
                    </div>
                </div>
            </div>
           
        </div>
    )
}

export default TechStack
