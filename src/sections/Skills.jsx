import React from 'react'
import StickyNote from '../components/StickyNote'
import FolderContainer from '../components/FolderContainer'

// Mixing icon sets for maximum stability with Vite
import { 
  DiHtml5, 
  DiCss3, 
  DiJavascript1, 
  DiReact, 
  DiNodejsSmall, 
  DiPython 
} from 'react-icons/di'

import { 
  SiCplusplus, 
  SiFigma, 
  SiPostgresql 
} from 'react-icons/si'

import { IoStatsChart } from 'react-icons/io5'

const Skills = ({ cabinetColor, folderColor }) => {
  const skills = [
    { title: "C++", icon: <SiCplusplus />, color: "bg-[#AFDFE3]" },
    { title: "Python", icon: <DiPython />, color: "bg-[#B6E3AF]" },
    { title: "HTML", icon: <DiHtml5 />, color: "bg-[#E8E196]" },
    { title: "CSS", icon: <DiCss3 />, color: "bg-[#E3AFE3]" },
    { title: "Node.js", icon: <DiNodejsSmall />, color: "bg-[#AFDFE3]" },
    { title: "React.js", icon: <DiReact />, color: "bg-[#B6E3AF]" },
    { title: "JavaScript", icon: <DiJavascript1 />, color: "bg-[#E8E196]" },
    { title: "SQL", icon: <SiPostgresql />, color: "bg-[#E3AFE3]" },
    { title: "Figma", icon: <SiFigma />, color: "bg-[#AFDFE3]" },
    { title: "Power BI", icon: <IoStatsChart />, color: "bg-[#B6E3AF]" }
  ]

  return (
    <FolderContainer 
      activeTab="Skills" 
      cabinetColor={cabinetColor} 
      folderColor={folderColor}
    >
      <div className="w-full flex flex-col items-center py-20 px-6">
        {/* Responsive Grid: 2 columns on mobile, 5 on desktop */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-12 max-w-7xl">
          {skills.map((skill, index) => (
            <StickyNote 
              key={index}
              title={skill.title}
              icon={skill.icon}
              color={skill.color}
            />
          ))}
        </div>
      </div>
    </FolderContainer>
  )
}

export default Skills