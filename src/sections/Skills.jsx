import React from 'react'
import FolderContainer from '../components/FolderContainer'
import StickyNote from '../components/StickyNote'

const Skills = ({ cabinetColor, folderColor }) => {
  const colors = ['bg-[#AFDFE3]', 'bg-[#B6E3AF]', 'bg-[#E8E196]', 'bg-[#E3AFE3]'];
  
  const skillList = [
    "C++", "Python", "HTML", "CSS", "Node.js",
    "React.js", "JavaScript", "SQL", "Figma", "Power BI"
  ];

  return (
    <FolderContainer 
      activeTab="Skills" 
      cabinetColor={cabinetColor} 
      folderColor={folderColor}
    >
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 md:gap-12 py-20 px-10">
        {skillList.map((skill, index) => (
          <StickyNote 
            key={skill}
            title={skill}
            /* Cycles through your 4 colors */
            color={colors[index % colors.length]}
            /* Gives each note a unique "messy" tilt */
            rotation={index % 2 === 0 ? -2 : 2}
          />
        ))}
      </div>
    </FolderContainer>
  )
}

export default Skills