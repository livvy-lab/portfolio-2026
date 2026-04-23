import React from 'react'

const StickyNote = ({ title, color, rotation }) => {
  return (
    <div 
      className={`
        ${color} 
        /* Mobile: vertical-ish | Desktop: Definitely vertical */
        w-44 h-52 md:w-52 md:h-60 
        border-[4px] border-black 
        shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] 
        flex items-center justify-center p-6
        transition-transform hover:scale-105 hover:z-20 cursor-default
        /* Removed rotation prop from class string to keep it clean */
      `}
      /* If you still want the slight tilt, we keep it in inline styles */
    >
      <h3 className="font-figma-hand text-black text-3xl md:text-4xl text-center leading-tight break-words">
        {title}
      </h3>
    </div>
  )
}

export default StickyNote