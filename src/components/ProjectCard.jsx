import React from 'react'
import { ArrowUpRight, Image as ImageIcon } from 'lucide-react'

const ProjectCard = ({ title, description, technologies, image, link }) => {
  return (
    /* Adjusted padding (p-6) and shadow (8px) for mobile. mx-auto for centering. */
    <div className="bg-[#B6E0E3] border-[4px] border-black rounded-[1.5rem] md:rounded-[2rem] p-6 md:p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] md:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] flex flex-col lg:flex-row gap-6 md:gap-10 items-center relative group max-w-full">
      
      {/* Project Image / Placeholder */}
      {/* border-4 on mobile to look cleaner */}
      <div className="w-full lg:w-2/5 aspect-video border-[4px] md:border-[6px] border-black rounded-[1rem] md:rounded-[1.5rem] overflow-hidden bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center relative">
        {image ? (
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="flex flex-col items-center gap-2 text-black/20">
            <ImageIcon className="w-12 h-12 md:w-16 md:h-16" strokeWidth={1} />
            <span className="font-mont font-black uppercase text-xs md:text-sm tracking-widest text-center">Image Pending</span>
          </div>
        )}
      </div>

      {/* Project Details */}
      {/* Added pb-12 on mobile to make room for the absolute arrow button */}
      <div className="flex-1 space-y-3 md:space-y-4 pb-12 md:pb-0 w-full text-left">
        <h3 className="font-mont font-black text-2xl md:text-4xl text-black leading-tight">{title}</h3>
        
        <p className="font-mont font-bold text-sm md:text-lg leading-relaxed text-black/80">
          {description}
        </p>

        <div className="pt-2 md:pt-4">
          <p className="font-mont font-black text-base md:text-xl text-black leading-tight">
            Technologies: <br className="md:hidden" />
            <span className="font-bold text-black/70 text-sm md:text-lg">{technologies}</span>
          </p>
        </div>
      </div>

      {/* External Link Arrow */}
      {/* Scaled down icon and button for mobile (bottom-4 right-4) */}
      <a 
        href={link} 
        target="_blank" 
        rel="noreferrer"
        className="absolute bottom-4 right-4 md:bottom-8 md:right-8 p-1.5 md:p-2 hover:translate-x-1 hover:-translate-y-1 transition-transform bg-white border-[3px] border-black rounded-lg shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] md:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
      >
        <ArrowUpRight size={24} md:size={32} strokeWidth={3} className="text-black" />
      </a>
    </div>
  )
}

export default ProjectCard