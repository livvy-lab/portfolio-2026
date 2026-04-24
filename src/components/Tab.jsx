import React from 'react'

const Tab = ({ name, color, icon, isActive, isFirst, index }) => {
    const linkId = `#${name.toLowerCase()}`;
  
    return (
      <a 
        href={linkId}
        className={`
          ${color} 
          px-14 py-4
          border-t-[6px] border-black border-r-[6px]
          rounded-t-[15px] rounded-b-none 
          font-mont font-black text-xl flex items-center gap-3
          cursor-pointer no-underline text-black
          
          /* No more growing/shrinking animation */
          transition-none

          ${!isFirst ? '-ml-[6px]' : 'border-l-[6px]'}
  
          /* Both states are h-[72px]. 
             The Active tab has NO bottom border so it merges.
             The Inactive tabs keep their bottom border to look like 'closed' files.
          */
          ${isActive 
            ? 'z-50 h-[72px] border-b-0 relative border-l-[6px]' 
            : 'z-10 h-[72px] border-b-[6px] relative opacity-80'
          }
        `}
        style={{ zIndex: isActive ? 50 : 40 - index }}
      >
        {React.cloneElement(icon, { strokeWidth: 3 })}
        {name}
      </a>
    )
  }

export default Tab