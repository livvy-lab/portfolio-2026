import React from 'react'

const StickyNote = ({ title, icon, color }) => {
  return (
    <div 
      className={`
        ${color} 
        w-44 h-52 md:w-52 md:h-60 
        border-[4px] border-black 
        shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] 
        flex flex-col items-center justify-center p-6 gap-3
\      `}
    >
      {/* Icon Container - Scaled for visibility */}
      {icon && (
        <div className="text-5xl md:text-6xl text-black mb-1">
          {icon}
        </div>
      )}

      {/* Title - Set to hand-drawn font */}
      <h3 className="font-figma-hand text-black text-2xl md:text-3xl text-center leading-none break-words">
        {title}
      </h3>
    </div>
  )
}

export default StickyNote