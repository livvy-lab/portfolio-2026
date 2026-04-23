import React from 'react'
import Navbar from './NavBar'

const FolderContainer = ({ children, activeTab, folderColor, cabinetColor, showSocials }) => {
    return (
      <section 
        id={activeTab.toLowerCase()} // This creates id="home", id="about", etc.
        className={`min-h-screen ${cabinetColor} flex flex-col w-full relative`}
      >
      
      {/* 1. The Social Icons - Positioned absolutely at the top right of the section */}
      {showSocials && (
        <div className="absolute top-6 right-10 flex gap-4 z-50">
          <a 
            href="https://linkedin.com/in/betaniapatmos" 
            target="_blank" 
            rel="noreferrer"
            className="w-12 h-12 bg-white border-[4px] border-black rounded-[10px] shadow-brutal flex items-center justify-center font-bold text-lg hover:-translate-y-1 transition-all"
          >
            in
          </a>
          <a 
            href="https://github.com/betaniapatmos" 
            target="_blank" 
            rel="noreferrer"
            className="w-12 h-12 bg-white border-[4px] border-black rounded-[10px] shadow-brutal flex items-center justify-center text-2xl hover:-translate-y-1 transition-all"
          >
            🐙
          </a>
        </div>
      )}

      <Navbar activeTab={activeTab} />
      
      <div className={`flex-1 flex items-center justify-center w-full px-4 ${folderColor}`}>
        {children}
      </div>
    </section>
  )
}

export default FolderContainer