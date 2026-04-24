import React from 'react'

const NameCard = () => {
  return (
    /* max-w-3xl is the "Goldilocks" size—larger than original, but not screen-filling */
    <div className="w-full max-w-2xl md:max-w-3xl bg-brutal-blue border-[4px] border-black rounded-[2rem] md:rounded-[2.5rem] p-6 md:p-10 shadow-brutal-lg flex flex-col items-center mx-auto">
      
      {/* Header Container */}
      <div className="text-white text-center mb-6 md:mb-8 flex flex-col items-center">
        <h2 className="text-5xl sm:text-6xl md:text-8xl font-black tracking-tighter leading-none">
          HELLO
        </h2>
        
        {/* Slightly bumped this to 3xl for better hierarchy with the bigger card */}
        <p className="text-xl sm:text-2xl md:text-3xl font-bold uppercase tracking-normal leading-none mt-2 md:mt-4">
          My Name Is
        </p>
      </div>
      
      {/* Name Display Box */}
      {/* Increased py-16 gives it that premium "badge" look on desktop */}
      <div className="w-full bg-white border-[4px] border-black rounded-xl md:rounded-2xl py-8 md:py-16 px-2 md:px-4 text-center">
        <h1 className="font-betania text-4xl sm:text-5xl md:text-8xl tracking-wider text-black uppercase leading-tight">
          OLIVIA<br/>WRIGHT
        </h1>
      </div>
    </div>
  )
}

export default NameCard