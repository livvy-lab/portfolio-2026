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
          font-mont font-black text-xl flex items-center gap-3 transition-all duration-200
          cursor-pointer no-underline text-black
          
          ${!isFirst ? '-ml-[6px]' : 'border-l-[6px]'}
  
          ${isActive 
            ? 'z-50 h-[72px] border-b-0 relative border-l-[6px]' 
            : 'z-10 h-[62px] border-b-[6px] relative'
          }
        `}
        style={{ zIndex: isActive ? 50 : 40 - index }}
      >
        {React.cloneElement(icon, { strokeWidth: 2 })}
        {name}
      </a>
    )
  }

export default Tab