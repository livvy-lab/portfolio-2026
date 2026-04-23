import React from 'react'
import headshot from '../assets/green-headshot.JPG'
import paperclip from '../assets/paper-clip.svg'

const Polaroid = () => {
  return (
    /* Removed rotate-3 and hover:rotate-0 */
    <div className="relative transition-transform duration-300 ease-in-out">
      
      {/* Paperclip SVG - Positioned to overlap the top right corner */}
      <img 
        src={paperclip} 
        alt="paperclip" 
        className="absolute -top-12 -right-10 w-25 h-auto z-20"
      />
      
      {/* Polaroid Frame */}
      <div className="bg-white border-[6px] border-black p-4 pb-14 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] w-full max-w-[380px]">
        
        {/* Headshot Container */}
        <div className="border-[6px] border-black overflow-hidden aspect-square mb-6 bg-gray-100">
          <img 
            src={headshot} 
            alt="Olivia Wright" 
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Caption in Figma Hand Font */}
        <p className="font-figma-hand text-black text-center text-2xl leading-tight uppercase tracking-tighter">
          It's not about how you start,<br />
          it's about how you finish.
        </p>
      </div>
    </div>
  )
}

export default Polaroid