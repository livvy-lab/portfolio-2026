import React from 'react'
import Home from './sections/Home'
import About from './sections/About' // 1. Import the new section

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

    </main>
  )
}

export default App