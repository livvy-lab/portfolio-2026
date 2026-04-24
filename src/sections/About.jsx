import React from 'react'
import BioBox from '../components/BioBox'
import Polaroid from '../components/Polaroid'

const About = () => {
  return (
    /* flex-col-reverse: Stacks Polaroid (2nd element) on top of BioBox (1st element)
       lg:flex-row: Restores your side-by-side layout for desktop
       gap-10: A tighter gap for mobile so they feel connected
    */
    <div className="flex flex-col-reverse lg:flex-row items-center justify-center gap-10 lg:gap-24 w-full py-12 md:py-20 px-6 animate-fadeIn">
      <BioBox />
      <Polaroid />
    </div>
  )
}

export default About