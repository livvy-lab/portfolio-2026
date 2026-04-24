import React from 'react'
import headshot from '../assets/green-headshot.JPG'
import paperclip from '../assets/paper-clip.svg'

const Polaroid = () => {
  return (
    <div className="relative transition-transform duration-300 ease-in-out mx-auto md:mx-0">
      
      {/* Paperclip: Keeps original -top-12/-right-10 on desktop (md:) */}
      <img 
        src={paperclip} 
        alt="paperclip" 
        className="absolute -top-8 -right-4 md:-top-12 md:-right-10 w-16 md:w-24 h-auto z-20"
      />
      
      {/* Polaroid Frame: Restores 6px border and 12px shadow for desktop (md:) */}
      <div className="bg-white border-[4px] md:border-[6px] border-black p-3 md:p-4 pb-10 md:pb-14 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] md:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] w-full max-w-[280px] md:max-w-[380px]">
        
        {/* Headshot Container: Restores 6px border for desktop */}
        <div className="border-[4px] md:border-[6px] border-black overflow-hidden aspect-square mb-4 md:mb-6 bg-gray-100">
          <img 
            src={headshot} 
            alt="Olivia Wright" 
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Caption: Restores 2xl for desktop */}
        <p className="font-figma-hand text-black text-center text-lg md:text-2xl leading-tight uppercase tracking-tighter px-1 md:px-0">
          It's not about how you start,<br />
          it's about how you finish.
        </p>
      </div>
    </div>
  )
}

export default Polaroid