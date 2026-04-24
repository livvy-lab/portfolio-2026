import React, { useState } from 'react'
import Tab from './Tab'
import githubIcon from '../assets/GitHub-Icon.svg'
import linkedinIcon from '../assets/LinkedIn-Icon.svg'
import { Home, Star, FolderCode, Users, CodeXml, Menu, X } from 'lucide-react'

const Navbar = ({ activeTab, onTabChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  const tabs = [
    { name: 'Home', color: 'bg-folder-yellow', icon: <Home size={20} />},
    { name: 'About', color: 'bg-folder-light-blue', icon: <Star size={20} /> },
    { name: 'Skills', color: 'bg-folder-blue', icon: <CodeXml size={20} /> },
    { name: 'Projects', color: 'bg-folder-light-pink', icon: <FolderCode size={20} /> },
    { name: 'Contact', color: 'bg-folder-pink', icon: <Users size={20} /> },
  ]

  return (
    <nav className="w-full border-b-[6px] border-black px-0 pt-4 z-50 bg-inherit">
      <div className="flex items-end justify-between h-full px-6">
        {/* Desktop Tabs - Standard flow */}
        <div className="hidden md:flex items-end -mb-[6px]">
          {tabs.map((tab, index) => (
            <Tab 
              key={tab.name}
              {...tab}
              index={index}
              isActive={tab.name === activeTab}
              isFirst={index === 0}
              onClick={() => onTabChange(tab.name)}
            />
          ))}
        </div>

        {/* Fixed Mobile Menu Toggle Button */}
        <div className="md:hidden">
          <button 
            onClick={() => setIsOpen(true)}
            className="fixed top-4 right-6 z-[60] p-2 border-[3px] border-black bg-white rounded-lg shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] active:shadow-none active:translate-x-[3px] active:translate-y-[3px] transition-all"
          >
            <Menu size={28} />
          </button>
        </div>
      </div>

      {/* Mobile Slide-out Overlay */}
      <div className={`fixed inset-0 z-[100] ${isOpen ? 'visible' : 'invisible'} md:hidden`}>
        {/* Backdrop */}
        <div 
          className={`absolute inset-0 bg-black/40 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`} 
          onClick={() => setIsOpen(false)} 
        />
        
        {/* Menu Panel */}
        <div className={`absolute right-0 top-0 h-full w-[80%] max-w-[300px] bg-white border-l-[6px] border-black p-5 flex flex-col shadow-[-10px_0px_0px_0px_rgba(0,0,0,0.1)] transform transition-transform duration-300 overflow-x-hidden ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          
          {/* Internal Content Wrapper - Conditional rendering helps clear "ghost" artifacts */}
          {isOpen && (
            <div className="flex flex-col h-full animate-in fade-in duration-200">
              {/* Header */}
              <div className="flex justify-between items-center mb-6 pt-1 flex-shrink-0">
                <h2 className="font-mont font-black uppercase text-xl tracking-tighter text-black">Menu</h2>
                <button onClick={() => setIsOpen(false)} className="p-1">
                  <X size={24}/>
                </button>
              </div>

              {/* Tab Buttons Container */}
              <div className="flex flex-col gap-4 flex-shrink-0 pr-2"> 
                {tabs.map((tab) => (
                  <button
                    key={tab.name}
                    onClick={() => {
                      onTabChange(tab.name);
                      setIsOpen(false);
                    }}
                    className={`flex items-center gap-3 p-3 border-[3px] border-black rounded-lg font-mont font-bold text-base text-black transition-all ${tab.color}
                      translate-x-0 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]
                      ${activeTab === tab.name ? 'ring-2 ring-black ring-inset' : ''}
                    `}
                  >
                    {tab.icon}
                    {tab.name}
                  </button>
                ))}
              </div>

              {/* Social Icons */}
              <div className="mt-8 flex gap-3 flex-shrink-0 mb-4">
                <a 
                  href="https://www.linkedin.com/in/olivia-n-wright/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block w-11 h-11 bg-white border-[3px] border-black rounded-[8px] shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center active:shadow-none transition-all hover:-translate-y-1"
                >
                  <img src={linkedinIcon} alt="LinkedIn" className="w-6 h-6" />
                </a>

                <a 
                  href="https://github.com/livvy-lab" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block w-11 h-11 bg-white border-[3px] border-black rounded-[8px] shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center active:shadow-none transition-all hover:-translate-y-1"
                >
                  <img src={githubIcon} alt="GitHub" className="w-6 h-6" />
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  )
}

export default Navbar