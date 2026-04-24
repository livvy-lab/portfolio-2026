import React from 'react'

const StickyNote = ({ title, icon, color }) => {
  return (
    <div 
      className={`
        ${color} 
        /* w-full makes it fluid, aspect-square keeps it from being too tall on mobile */
        w-full aspect-square md:w-52 md:h-60 
        border-[3px] md:border-[4px] border-black 
        shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] md:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] 
        flex flex-col items-center p-3 md:p-6
      `}
    >
      {/* Centering Wrapper: Taking up available space to keep icon in the middle */}
      <div className="flex-1 flex items-center justify-center w-full">
        {icon && (
          <div className="text-5xl md:text-6xl text-black">
            {icon}
          </div>
        )}
      </div>

      {/* Title - Fixed to bottom with a small margin */}
      <h3 className="font-figma-hand text-black text-lg md:text-2xl text-center leading-none mb-1 md:mb-0">
        {title}
      </h3>
    </div>
  )
}

export default StickyNote