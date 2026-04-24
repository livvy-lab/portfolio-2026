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
  showSocials 
}) => {
    return (
      <section 
        id={activeTab.toLowerCase()} 
        /* Back to standard 100vh to reduce total page length */
        className={`min-h-[100dvh] md:min-h-[100vh] ${cabinetColor} flex flex-col w-full relative overflow-x-hidden transition-colors duration-500`}
      >
      
      {showSocials && (
        <div className="hidden md:flex absolute top-6 right-10 gap-4 z-[999] pointer-events-auto">
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

      <Navbar activeTab={currentActive} onTabChange={onTabChange} />
      
      {/* 1. justify-center: Keeps everything centered on mobile.
          2. md:justify-start: Shifts content to the top on desktop.
          3. md:pt-16: Provides the top buffer only for the desktop view.
      */}
      <div className={`flex-1 flex flex-col items-center justify-center md:justify-start w-full px-4 md:pt-16 pb-8 md:pb-20 relative z-0 ${folderColor}`}>
        <div className="w-full flex items-center justify-center md:mt-12">
          {children}
        </div>
      </div>
    </section>
  )
}

export default FolderContainer