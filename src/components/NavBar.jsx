import React from 'react'
import Tab from './Tab'

const Navbar = ({ activeTab }) => {
  const tabs = [
    { name: 'Home', color: 'bg-folder-yellow', icon: '🏠' },
    { name: 'About', color: 'bg-folder-light-blue', icon: '⭐' },
    { name: 'Skills', color: 'bg-folder-blue', icon: '</>' },
    { name: 'Projects', color: 'bg-folder-light-pink', icon: '📂' },
    { name: 'Contact', color: 'bg-folder-pink', icon: '👥' },
  ]

  return (
    /* Reduced pt-4 moves the navbar closer to the top of the screen */
    <nav className="w-full border-b-[6px] border-black px-0 pt-4 sticky top-0 z-50">
      <div className="flex items-end h-full px-6">
        
        {/* Negative margin-bottom pulls the tabs onto the black line */}
        <div className="flex items-end -mb-[6px]">
          {tabs.map((tab, index) => (
            <Tab 
              key={tab.name}
              {...tab}
              index={index}
              isActive={tab.name === activeTab}
              isFirst={index === 0}
            />
          ))}
        </div>

        {/* Social Icons positioned for the tighter layout */}
        <div className="ml-auto flex gap-4 mb-[12px]">
          <a href="#" className="w-10 h-10 bg-white border-[3px] border-black rounded-lg flex items-center justify-center font-bold">in</a>
          <a href="#" className="w-10 h-10 bg-white border-[3px] border-black rounded-lg flex items-center justify-center text-xl">🐙</a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar