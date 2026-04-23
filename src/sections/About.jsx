import React from 'react'
import FolderContainer from '../components/FolderContainer'
import BioBox from '../components/BioBox'
import Polaroid from '../components/Polaroid'

const About = () => {
  return (
    <FolderContainer 
      activeTab="About" 
      cabinetColor="bg-folder-yellow" 
      folderColor="bg-folder-light-blue"
    >
      <div id="about" className="flex flex-col lg:flex-row items-center justify-center gap-16 lg:gap-24 w-full py-20">
        <BioBox />
        <Polaroid />
      </div>
    </FolderContainer>
  )
}

export default About