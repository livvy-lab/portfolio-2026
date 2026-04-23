import React from 'react'

const Tab = ({ name, color, icon, isActive, isFirst, isLast }) => {
  return (
    <button 
      className={`
        ${color}
        px-10 py-3
        border-t-[6px] border-black
        /* Each tab has a 3px side border to create 6px total when touching */
        border-x-[3px] 
        rounded-t-[15px]
        font-mont font-black text-xl flex items-center gap-3 transition-all
        
        /* Layering Logic */
        ${isActive 
          ? 'z-30 h-[66px] border-b-0 -mb-[6px] relative translate-y-[6px]' 
          : 'z-10 h-[56px] border-b-[6px] hover:brightness-95'
        }
        
        /* Edge Logic */
        ${isFirst ? 'border-l-[6px]' : ''}
        ${isLast ? 'border-r-[6px]' : ''}
      `}
    >
      <span className="text-xl grayscale">{icon}</span>
      {name}
    </button>
  )
}

export default Tab