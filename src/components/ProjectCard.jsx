import React from 'react'
import { ArrowUpRight, Image as ImageIcon } from 'lucide-react'

const ProjectCard = ({ title, description, technologies, image, link }) => {
  return (
    <div className="bg-[#B6E0E3] border-[4px] border-black rounded-[2rem] p-8 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] flex flex-col lg:flex-row gap-10 items-center relative group">
      
      {/* Project Image / Placeholder */}
      <div className="w-full lg:w-2/5 aspect-video border-[6px] border-black rounded-[1.5rem] overflow-hidden bg-white shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center relative">
        {image ? (
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          /* The Placeholder: A clean brutalist empty state */
          <div className="flex flex-col items-center gap-2 text-black/20">
            <ImageIcon size={64} strokeWidth={1} />
            <span className="font-mont font-black uppercase text-sm tracking-widest">Image Pending</span>
          </div>
        )}
      </div>

      {/* Project Details */}
      <div className="flex-1 space-y-4">
        <h3 className="font-mont font-black text-4xl text-black">{title}</h3>
        
        <p className="font-mont font-bold text-lg leading-relaxed text-black/80">
          {description}
        </p>

        <div className="pt-4">
          <p className="font-mont font-black text-xl text-black leading-tight">
            Technologies: <span className="font-bold text-black/70 text-lg">{technologies}</span>
          </p>
        </div>
      </div>

      {/* External Link Arrow */}
      <a 
        href={link} 
        target="_blank" 
        rel="noreferrer"
        className="absolute bottom-8 right-8 p-2 hover:translate-x-1 hover:-translate-y-1 transition-transform bg-white border-[3px] border-black rounded-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
      >
        <ArrowUpRight size={32} strokeWidth={3} className="text-black" />
      </a>
    </div>
  )
}

export default ProjectCard