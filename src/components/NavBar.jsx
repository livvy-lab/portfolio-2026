import React from 'react'
import Tab from './Tab'
import { Home, Star, FolderCode, Users, CodeXml } from 'lucide-react'

const Navbar = ({ activeTab, onTabChange }) => {
  const tabs = [
    { name: 'Home', color: 'bg-folder-yellow', icon: <Home size={20} />},
    { name: 'About', color: 'bg-folder-light-blue', icon: <Star size={20} /> },
    { name: 'Skills', color: 'bg-folder-blue', icon: <CodeXml size={20} /> },
    { name: 'Projects', color: 'bg-folder-light-pink', icon: <FolderCode size={20} /> },
    { name: 'Contact', color: 'bg-folder-pink', icon: <Users size={20} /> },
  ]

  return (
    <nav className="w-full border-b-[6px] border-black px-0 pt-4 z-[50] bg-inherit pointer-events-none">
      <div className="flex items-end justify-between h-full px-6 pointer-events-auto">
        {/* Desktop Tabs - Only visible on md and up */}
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

        {/* Mobile Toggle is removed from here and moved to App.jsx */}
      </div>
    </nav>
  )
}

export default Navbar