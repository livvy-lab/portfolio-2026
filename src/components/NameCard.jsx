import React from 'react'

const NameCard = () => {
  return (
    /* Changed p-8 to p-6 on mobile, and adjusted rounded corners for smaller screens */
    <div className="w-full max-w-2xl bg-brutal-blue border-[4px] border-black rounded-[2rem] md:rounded-[2.5rem] p-6 md:p-8 shadow-brutal-lg flex flex-col items-center mx-auto">
      
      {/* Header Container */}
      <div className="text-white text-center mb-6 md:mb-8 flex flex-col items-center">
        {/* Responsive text: 5xl on mobile, 7xl+ on desktop */}
        <h2 className="text-5xl sm:text-6xl md:text-8xl font-black tracking-tighter leading-none">
          HELLO
        </h2>
        
        {/* Scaled down text for mobile to keep the "tag" feel */}
        <p className="text-xl sm:text-2xl md:text-3xl font-bold uppercase tracking-normal leading-none mt-2 md:mt-4">
          My Name Is
        </p>
      </div>
      
      {/* Name Display Box */}
      <div className="w-full bg-white border-[4px] border-black rounded-xl md:rounded-2xl py-8 md:py-12 px-2 md:px-4 text-center">
        {/* Using text-4xl for mobile so your name stays on 2 lines comfortably.
          MD breakpoint kicks in for the larger desktop view.
        */}
        <h1 className="font-betania text-4xl sm:text-5xl md:text-8xl tracking-wider text-black uppercase leading-tight">
          OLIVIA<br/>WRIGHT
        </h1>
      </div>
    </div>
  )
}

export default NameCard