import React from 'react'

const Tab = ({ name, color, icon, isActive, isFirst, index }) => {
  // Convert name to lowercase for the ID link (e.g., "About" -> "#about")
  const linkId = `#${name.toLowerCase()}`;

  return (
    <a 
      href={linkId}
      className={`
        ${color} 
        px-14 py-4
        border-t-[6px] border-black border-r-[6px]
        rounded-t-[15px] rounded-b-none 
        font-mont font-black text-xl flex items-center gap-3 transition-all duration-200
        cursor-pointer no-underline text-black /* Added cursor and reset link styles */
        
        /* Overlap fix */
        ${!isFirst ? '-ml-[6px]' : 'border-l-[6px]'}

        /* The Align Fix */
        ${isActive 
          ? 'z-50 h-[72px] border-b-0 relative border-l-[6px]' 
          : 'z-10 h-[66px] border-b-[6px] relative'
        }
      `}
      style={{ zIndex: isActive ? 50 : 40 - index }}
    >
      <span className="text-xl grayscale">{icon}</span>
      {name}
    </a>
  )
}

export default Tab