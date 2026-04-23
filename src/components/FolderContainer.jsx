import React from 'react'
import Navbar from './NavBar'

const FolderContainer = ({ children, activeTab, folderColor, cabinetColor }) => {
  return (
    <section id={activeTab.toLowerCase()} className={`min-h-screen ${cabinetColor} flex flex-col w-full`}>
      <Navbar activeTab={activeTab} />
      <div className={`flex-1 flex items-center justify-center w-full px-4 ${folderColor}`}>
        {children}
      </div>
    </section>
  )
}

export default FolderContainer