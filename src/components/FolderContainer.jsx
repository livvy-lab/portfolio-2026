import React from 'react'
import Navbar from './NavBar'
import githubIcon from '../assets/GitHub-icon.svg'
import linkedinIcon from '../assets/LinkedIn-Icon.svg'

/* Added currentActive to the props so the Navbar highlights the right tab 
   while you scroll past different sections */
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
        /* min-h-[100dvh] ensures the folder takes up the full mobile screen */
        className={`min-h-[100dvh] ${cabinetColor} flex flex-col w-full relative overflow-x-hidden`}
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

      {/* We pass currentActive here so the Navbar highlights the tab 
          you're actually on, even if this specific folder is 'About' */}
      <Navbar activeTab={currentActive} onTabChange={onTabChange} />
      
      <div className={`flex-1 flex flex-col items-center justify-center w-full px-4 py-8 md:py-0 relative z-0 ${folderColor}`}>
        <div className="w-full flex items-center justify-center">
          {children}
        </div>
      </div>
    </section>
  )
}

export default FolderContainer