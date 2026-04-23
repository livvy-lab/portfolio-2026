import React from 'react'
import Home from './sections/Home'
import About from './sections/About'
import Skills from './sections/Skills'
import Projects from './sections/Projects'
import Contact from './sections/Contact'

function App() {
  return (
    <main className="w-full scroll-smooth">
      
      <Home 
        cabinetColor="bg-white" 
        folderColor="bg-folder-yellow" 
      />

      <About 
        cabinetColor="bg-folder-yellow" 
        folderColor="bg-folder-light-blue" 
      />

      <Skills 
        cabinetColor="bg-folder-light-blue" 
        folderColor="bg-folder-blue" 
      />

      <Projects 
        cabinetColor="bg-folder-blue" 
        folderColor="bg-folder-pink" 
      />

      <Contact 
        cabinetColor="bg-folder-light-pink" 
        folderColor="bg-folder-pink" 
      />
    </main>
  )
}

export default App