import React from 'react'
import BioBox from '../components/BioBox'
import Polaroid from '../components/Polaroid'

const About = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center gap-16 lg:gap-24 w-full py-20 animate-fadeIn">
      <BioBox />
      <Polaroid />
    </div>
  )
}

export default About