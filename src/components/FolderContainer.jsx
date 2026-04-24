import React from 'react'
import Navbar from './NavBar'
import githubIcon from '../assets/GitHub-Icon.svg'
import linkedinIcon from '../assets/LinkedIn-Icon.svg'

const FolderContainer = ({ 
  children, 
  activeTab, 
  currentActive, 
  onTabChange, 
  folderColor, 
  cabinetColor, 
  showSocials,
  index // Added index prop
}) => {
    return (
      <section 
        id={activeTab.toLowerCase()} 
        /* STACKING FIX: We use the index to increase the z-index for each section.
           Section 0 (Home) = z-index 10
           Section 1 (About) = z-index 20
           This ensures the next folder physically slides OVER the previous one.
        */
        style={{ zIndex: (index + 1) * 10 }}
        className={`min-h-[100dvh] md:min-h-[100vh] ${cabinetColor} flex flex-col w-full relative overflow-x-hidden transition-colors duration-500`}
      >
      
      {showSocials && (
        <div className="hidden md:flex absolute top-6 right-10 gap-4 z-[100] pointer-events-auto">
          <a 
            href="https://www.linkedin.com/in/olivia-n-wright/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="block w-12 h-12 bg-white border-[4px] border-black rounded-[10px] shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center hover:-translate-y-1 transition-all cursor-pointer active:bg-gray-100"
          >
            <img src={linkedinIcon} alt="LinkedIn" className="w-7 h-7" />
          </a>

          <a 
            href="https://github.com/livvy-lab" 
            target="_blank" 
            rel="noopener noreferrer"
            className="block w-12 h-12 bg-white border-[4px] border-black rounded-[10px] shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center hover:-translate-y-1 transition-all cursor-pointer active:bg-gray-100"
          >
            <img src={githubIcon} alt="GitHub" className="w-7 h-7" />
          </a>
        </div>
      )}

      {/* Sticky ensures the tabs for THIS folder stay at the top 
          until the NEXT folder's tabs slide up and cover them.
      */}
      <div className="sticky top-0 z-[100] w-full">
        <Navbar activeTab={currentActive} onTabChange={onTabChange} />
      </div>
      
      <div className={`flex-1 flex flex-col items-center justify-center md:justify-start w-full px-4 md:pt-16 pb-8 md:pb-20 relative z-0 ${folderColor}`}>
        <div className="w-full flex items-center justify-center md:mt-12">
          {children}
        </div>
      </div>
    </section>
  )
}

export default FolderContainer