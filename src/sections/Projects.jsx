import React from 'react'
import FolderContainer from '../components/FolderContainer'
import ProjectCard from '../components/ProjectCard'

const Projects = ({ cabinetColor }) => {
  const projects = [
    {
      title: "Scrapped",
      description: "Scrapped is a real-time, collaborative digital scrapbook application designed to help users document memories and trips with friends. It moves beyond static photo albums by providing an interactive, creative canvas where users can arrange photos, digital stickers, and custom UI assets in a shared workspace.",
      technologies: "TypeScript, React, Node.js/Express, Socket.io, PostgreSQL, AWS S3",
      image: null,
      link: "#"
    },
    {
      title: "CoogMusic",
      description: "A full-stack music streaming platform developed for a university project. Features include user authentication, playlist management, and a dynamic audio player interface.",
      technologies: "React, Node.js, SQL, Express",
      image: null,
      link: "#"
    }
  ]

  return (
    <FolderContainer 
      activeTab="Projects" 
      cabinetColor={cabinetColor} 
      /* This is now the Light Pink color from your screenshot */
      folderColor="bg-[#E1B3E1]" 
    >
      <div className="flex flex-col gap-12 py-20 px-6 max-w-6xl w-full">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </FolderContainer>
  )
}

export default Projects