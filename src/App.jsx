import React, { useState, useEffect } from 'react'
import FolderContainer from './components/FolderContainer'
import Home from './sections/Home'
import About from './sections/About'
import Skills from './sections/Skills'
import Projects from './sections/Projects'
import Contact from './sections/Contact'

function App() {
  const [activeTab, setActiveTab] = useState('Home');

  // 1. Instant Snap Function
  const handleTabChange = (tabName) => {
    const element = document.getElementById(tabName.toLowerCase());
    if (element) {
      // We use behavior: 'auto' (or just remove the options) to snap instantly
      element.scrollIntoView({ behavior: 'auto' });
      setActiveTab(tabName);
    }
  };

  // 2. Intersection Observer for Scroll Highlighting
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-50% 0px -50% 0px', 
      threshold: 0
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          const formattedId = id.charAt(0).toUpperCase() + id.slice(1);
          setActiveTab(formattedId);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    
    const sections = ['home', 'about', 'skills', 'projects', 'contact'];
    sections.forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <main className="w-full bg-white">
      
      <FolderContainer 
        activeTab="Home" 
        currentActive={activeTab} 
        onTabChange={handleTabChange}
        cabinetColor="bg-white" 
        folderColor="bg-folder-yellow" 
        showSocials={true}
      >
        <Home />
      </FolderContainer>

      <FolderContainer 
        activeTab="About" 
        currentActive={activeTab}
        onTabChange={handleTabChange}
        cabinetColor="bg-folder-yellow" 
        folderColor="bg-folder-light-blue" 
      >
        <About />
      </FolderContainer>

      <FolderContainer 
        activeTab="Skills" 
        currentActive={activeTab}
        onTabChange={handleTabChange}
        cabinetColor="bg-folder-light-blue" 
        folderColor="bg-folder-blue" 
      >
        <Skills />
      </FolderContainer>

      <FolderContainer 
        activeTab="Projects" 
        currentActive={activeTab}
        onTabChange={handleTabChange}
        cabinetColor="bg-folder-blue" 
        folderColor="bg-folder-light-pink" 
      >
        <Projects />
      </FolderContainer>

      <FolderContainer 
        activeTab="Contact" 
        currentActive={activeTab}
        onTabChange={handleTabChange}
        cabinetColor="bg-folder-light-pink" 
        folderColor="bg-folder-pink" 
      >
        <Contact />
      </FolderContainer>
    </main>
  )
}

export default App