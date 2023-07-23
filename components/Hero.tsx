"use client"

import CustomButton from "./CustomButton"
import Image from "next/image";


const Hero = () => {
    const handleScroll = () => {

    };

  return (
    <div className="hero">
        <div className="flext-1 pt-36 padding-x">
            <h1 className="hero__title">
                Are we ready? ... fast and furious!
            </h1>
            <p className="hero__subtitle">
                The real driving simulation you've never experienced before 
            </p>

            <CustomButton 
               title="Select your car"
               containerStyles="bg-primary-blue
               text-white rounded-full mt-20"
               handleClick={handleScroll}
            />
        </div>
        <div className="hero__image-container">
            <div className="hero__image">
                <Image src="/gran7.png" alt="gran7"
                fill className="object-contain" />
            </div>
        </div>
    </div>
  )
}

export default Hero