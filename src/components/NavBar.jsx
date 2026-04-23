import React from 'react'

const Navbar = ({ activeTab }) => {
  const tabs = [
    { name: 'Home', color: 'bg-folder-yellow', icon: '🏠' },
    { name: 'About', color: 'bg-folder-light-blue', icon: '⭐' },
    { name: 'Skills', color: 'bg-folder-blue', icon: '</>' },
    { name: 'Projects', color: 'bg-folder-pink', icon: '📂' },
    { name: 'Contact', color: 'bg-folder-light-pink', icon: '👥' },
  ]

  return (
    <nav className="w-full border-b-[6px] border-black px-0 pt-10 sticky top-0 z-50">
      <div className="flex items-end h-full px-6">
        
        {/* Tab Row: Negative margin pulls them down exactly 6px onto the black border */}
        <div className="flex items-end -mb-[6px]">
          {tabs.map((tab) => {
            const isActive = tab.name === activeTab;
            
            return (
              <button 
                key={tab.name}
                className={`
                  ${tab.color} 
                  px-12 py-3
                  border-t-[6px] border-x-[3px] border-black
                  rounded-t-[15px]
                  font-mont font-black text-xl flex items-center gap-3 transition-all
                  
                  /* First Tab Left Border */
                  ${tab.name === 'Home' ? 'border-l-[6px]' : ''}
                  
                  /* Last Tab Right Border */
                  ${tab.name === 'Contact' ? 'border-r-[6px]' : ''}
                  
                  /* Active state: 
                     - If active: Remove bottom border, taller height (66px) to overlap
                     - If inactive: Keep 6px bottom border, shorter height (56px)
                  */
                  ${isActive 
                    ? 'border-b-0 h-[66px] z-10 relative' 
                    : 'border-b-[6px] h-[56px] hover:brightness-95'
                  }
                `}
              >
                <span className="text-xl grayscale">{tab.icon}</span>
                {tab.name}
              </button>
            );
          })}
        </div>

        {/* Social Icons */}
        <div className="ml-auto flex gap-4 mb-[14px]">
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
      </div>
    </nav>
  )
}

export default Navbar