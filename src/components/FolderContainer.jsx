import React from 'react'
import Navbar from './NavBar'
import githubIcon from '../assets/GitHub-icon.svg'
import linkedinIcon from '../assets/LinkedIn-Icon.svg'

const FolderContainer = ({ children, activeTab, folderColor, cabinetColor, showSocials }) => {
    return (
      <section 
        id={activeTab.toLowerCase()} 
        className={`min-h-screen ${cabinetColor} flex flex-col w-full relative`}
      >
      
      {/* clickable Social Icons */}
      {showSocials && (
        /* z-[999] forces this to be the top-most layer of the entire app */
        <div className="absolute top-6 right-10 flex gap-4 z-[999] pointer-events-auto">
          {/* LinkedIn Button */}
          <a 
            href="https://www.linkedin.com/in/olivia-n-wright/" 
            target="_blank" 
            rel="noopener noreferrer"
            /* block ensures the anchor tag fills the box */
            className="block w-12 h-12 bg-white border-[4px] border-black rounded-[10px] shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center hover:-translate-y-1 hover:translate-x-1 hover:shadow-none transition-all cursor-pointer active:bg-gray-100"
          >
            <img src={linkedinIcon} alt="LinkedIn" className="w-7 h-7 pointer-events-none" />
          </a>

          {/* GitHub Button */}
          <a 
            href="https://github.com/livvy-lab" 
            target="_blank" 
            rel="noopener noreferrer"
            className="block w-12 h-12 bg-white border-[4px] border-black rounded-[10px] shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center hover:-translate-y-1 hover:translate-x-1 hover:shadow-none transition-all cursor-pointer active:bg-gray-100"
          >
            <img src={githubIcon} alt="GitHub" className="w-7 h-7 pointer-events-none" />
          </a>
        </div>
      )}

      <Navbar activeTab={activeTab} />
      
      {/* We add z-0 here to ensure children stay behind the social icons */}
      <div className={`flex-1 flex items-center justify-center w-full px-4 relative z-0 ${folderColor}`}>
        {children}
      </div>
    </section>
  )
}

export default FolderContainer