import React, { useState, useEffect } from 'react'
import FolderContainer from './components/FolderContainer'
import Home from './sections/Home'
import About from './sections/About'
import Skills from './sections/Skills'
import Projects from './sections/Projects'
import Contact from './sections/Contact'
import githubIcon from './assets/GitHub-Icon.svg'
import linkedinIcon from './assets/LinkedIn-Icon.svg'
import { Home as HomeIcon, Star, FolderCode, Users, CodeXml, Menu, X } from 'lucide-react'

function App() {
  const [activeTab, setActiveTab] = useState('Home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const tabs = [
    { name: 'Home', color: 'bg-folder-yellow', icon: <HomeIcon size={20} />},
    { name: 'About', color: 'bg-folder-light-blue', icon: <Star size={20} /> },
    { name: 'Skills', color: 'bg-folder-blue', icon: <CodeXml size={20} /> },
    { name: 'Projects', color: 'bg-folder-light-pink', icon: <FolderCode size={20} /> },
    { name: 'Contact', color: 'bg-folder-pink', icon: <Users size={20} /> },
  ]

  const handleTabChange = (tabName) => {
    const element = document.getElementById(tabName.toLowerCase());
    if (element) {
      element.scrollIntoView({ behavior: 'auto' });
      setActiveTab(tabName);
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    const observerOptions = { root: null, rootMargin: '-50% 0px -50% 0px', threshold: 0 };
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
    ['home', 'about', 'skills', 'projects', 'contact'].forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <main className="w-full bg-white relative">
      
      {/* Sections */}
      <FolderContainer activeTab="Home" index={0} currentActive={activeTab} onTabChange={handleTabChange} cabinetColor="bg-white" folderColor="bg-folder-yellow" showSocials={true}><Home /></FolderContainer>
      <FolderContainer activeTab="About" index={1} currentActive={activeTab} onTabChange={handleTabChange} cabinetColor="bg-folder-yellow" folderColor="bg-folder-light-blue"><About /></FolderContainer>
      <FolderContainer activeTab="Skills" index={2} currentActive={activeTab} onTabChange={handleTabChange} cabinetColor="bg-folder-light-blue" folderColor="bg-folder-blue"><Skills /></FolderContainer>
      <FolderContainer activeTab="Projects" index={3} currentActive={activeTab} onTabChange={handleTabChange} cabinetColor="bg-folder-blue" folderColor="bg-folder-light-pink"><Projects /></FolderContainer>
      <FolderContainer activeTab="Contact" index={4} currentActive={activeTab} onTabChange={handleTabChange} cabinetColor="bg-folder-light-pink" folderColor="bg-folder-pink"><Contact /></FolderContainer>

      {/* GLOBAL MOBILE MENU - Always on top */}
      <div className="md:hidden">
        <button 
          onClick={() => setIsMenuOpen(true)}
          className={`fixed top-4 right-6 z-[9999] p-2 border-[3px] border-black bg-white rounded-lg shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] active:shadow-none transition-all ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}
        >
          <Menu size={28} />
        </button>

        <div className={`fixed inset-0 z-[10000] ${isMenuOpen ? 'visible' : 'invisible'}`}>
          <div className={`absolute inset-0 bg-black/40 transition-opacity duration-300 ${isMenuOpen ? 'opacity-100' : 'opacity-0'}`} onClick={() => setIsMenuOpen(false)} />
          <div className={`absolute right-0 top-0 h-full w-[80%] max-w-[300px] bg-white border-l-[6px] border-black p-5 flex flex-col shadow-[-10px_0px_0px_0px_rgba(0,0,0,0.1)] transform transition-transform duration-300 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
            <div className="flex justify-between items-center mb-6 flex-shrink-0">
              <h2 className="font-mont font-black uppercase text-xl text-black">Menu</h2>
              <button onClick={() => setIsMenuOpen(false)}><X size={24}/></button>
            </div>
            <div className="flex flex-col gap-4"> 
              {tabs.map((tab) => (
                <button key={tab.name} onClick={() => handleTabChange(tab.name)} className={`flex items-center gap-3 p-3 border-[3px] border-black rounded-lg font-mont font-bold text-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] ${tab.color} ${activeTab === tab.name ? 'ring-2 ring-black ring-inset' : ''}`}>
                  {tab.icon} {tab.name}
                </button>
              ))}
            </div>
            <div className="mt-8 flex gap-3">
              <a href="https://www.linkedin.com/in/olivia-n-wright/" target="_blank" rel="noopener noreferrer" className="w-11 h-11 bg-white border-[3px] border-black rounded-[8px] shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center"><img src={linkedinIcon} alt="LinkedIn" className="w-6 h-6" /></a>
              <a href="https://github.com/livvy-lab" target="_blank" rel="noopener noreferrer" className="w-11 h-11 bg-white border-[3px] border-black rounded-[8px] shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center"><img src={githubIcon} alt="GitHub" className="w-6 h-6" /></a>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default App