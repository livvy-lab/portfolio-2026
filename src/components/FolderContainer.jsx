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
        /* Changed min-h to 110vh to give more scroll "travel" time.
          This prevents the tabs from flickering too fast when you scroll quickly.
        */
        className={`min-h-[110dvh] md:min-h-[120vh] ${cabinetColor} flex flex-col w-full relative overflow-x-hidden transition-colors duration-500`}
      >
      
      {showSocials && (
        <div className="hidden md:flex absolute top-6 right-10 gap-4 z-[999] pointer-events-auto">
          {/* ... LinkedIn/GitHub links ... */}
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
      
      {/* Increased py-16 on mobile and py-24 on desktop. 
        This extra vertical space acts as a "buffer" so the active tab 
        stays highlighted longer as the content passes the center of the screen.
      */}
      <div className={`flex-1 flex flex-col items-center justify-center w-full px-4 py-16 md:py-24 relative z-0 ${folderColor}`}>
        <div className="w-full flex items-center justify-center">
          {children}
        </div>
      </div>
    </section>
  )
}

export default FolderContainer