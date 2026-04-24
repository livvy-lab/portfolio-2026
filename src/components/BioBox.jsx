import React from 'react'

const BioBox = () => {
  return (
    /* Shadow and Padding: Restore 12px/p-12 for desktop, use 8px/p-6 for mobile */
    <div className="bg-[#B6E3AF] border-[4px] border-black p-6 md:p-12 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] md:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] max-w-xl rounded-xl mx-auto md:mx-0">
      
      {/* Space-y: Tighter on mobile (4), original on desktop (6) */}
      <div className="font-mont text-black text-center space-y-4 md:space-y-6 leading-relaxed">
        
        <p className="font-black text-base md:text-lg">
          Hi there! I’m a Software Developer and a University of Houston Alum (Class of '25).
        </p>
        
        {/* Font weight: Standard bold on mobile to prevent "ink bleed", original heavy bold on desktop */}
        <p className="font-semibold md:font-bold text-sm md:text-base">
          My path to tech wasn’t linear, I’m a product of the pre-med to comp-sci pipeline, but my passion for problem-solving and communication has remained my North Star. I thrive at the intersection of technical logic and leadership, whether I’m architecting a full-stack application or leading a team.
        </p>

        <p className="font-semibold md:font-bold text-sm md:text-base">
          During my time at UH, I had the privilege of serving as President of IEEE-NSM for two semesters and helping students navigate complex concepts as a Data Structures & Algorithms TA. I also enjoy diving into new domains, such as my time at AT&T, where I focused on technology enablement and automation within the supply chain.
        </p>

        <p className="font-black text-base md:text-lg italic">
          I’m a creator, continuous learner, and a perseverer.
        </p>
      </div>
    </div>
  )
}

export default BioBox