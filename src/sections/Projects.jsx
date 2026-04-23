import React from 'react'
import FolderContainer from '../components/FolderContainer'
import ProjectCard from '../components/ProjectCard'

// Importing your assets
import ScrappedImg from '../assets/Scrapped.png'
import CoogMusicImg from '../assets/Coogs-Music.png'

const Projects = ({ cabinetColor }) => {
  const projects = [
    {
      title: "Scrapped",
      description: "Scrapped is a real-time, collaborative digital scrapbook application designed to help users document memories and trips with friends. It moves beyond static photo albums by providing an interactive, creative canvas where users can arrange photos, digital stickers, and custom UI assets in a shared workspace.",
      technologies: "TypeScript, React, Node.js/Express, Socket.io, PostgreSQL, AWS S3",
      image: ScrappedImg,
      link: "https://github.com/livvy-lab/scrapbook-app"
    },
    {
      title: "CoogMusic",
      description: "A full-stack music streaming platform developed for a university project. Features include user authentication, playlist management, and a dynamic audio player interface.",
      technologies: "React, Node.js, SQL, Express",
      image: CoogMusicImg,
      link: "https://github.com/livvy-lab/CoogMusic"
    }
  ]

  return (
    <FolderContainer 
      activeTab="Projects" 
      cabinetColor={cabinetColor} 
      folderColor="bg-[#E1B3E1]" 
    >
      <div className="flex flex-col items-center gap-12 py-20 px-6 max-w-6xl w-full mx-auto">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </FolderContainer>
  )
}

export default Projects