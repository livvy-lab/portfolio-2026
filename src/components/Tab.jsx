import React from 'react'

const Tab = ({ name, color, icon, isActive, isFirst, index }) => {
  return (
    <button 
      className={`
        ${color} 
        px-14 py-4
        border-t-[6px] border-black border-r-[6px]
        rounded-t-[15px] rounded-b-none 
        font-mont font-black text-xl flex items-center gap-3 transition-all duration-200
        
        /* Overlap fix */
        ${!isFirst ? '-ml-[6px]' : 'border-l-[6px]'}

        /* The Align Fix: 
           Active tab is taller (72px) and has NO bottom border.
           Inactive tabs are shorter (66px) and keep their bottom border.
        */
        ${isActive 
          ? 'z-50 h-[72px] border-b-0 relative border-l-[6px]' 
          : 'z-10 h-[66px] border-b-[6px] relative'
        }
      `}
      style={{ zIndex: isActive ? 50 : 40 - index }}
    >
      <span className="text-xl grayscale">{icon}</span>
      {name}
    </button>
  )
}

export default Tab