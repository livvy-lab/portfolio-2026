import React from 'react'

const NameCard = () => {
  return (
    <div className="w-full max-w-2xl bg-brutal-blue border-[4px] border-black rounded-[2.5rem] p-8 shadow-brutal-lg flex flex-col items-center">
      
      {/* Header Container */}
      <div className="text-white text-center mb-8 flex flex-col items-center">
        {/* Increased to text-8xl for a massive HELLO */}
        <h2 className="text-7xl font-black tracking-tighter leading-none">
          HELLO
        </h2>
        
        {/* Increased to text-3xl and added mt-4 for the spacing gap */}
        <p className="text-3xl font-bold uppercase tracking-normal leading-none mt-4">
          My Name Is
        </p>
      </div>
      
      {/* Name Display Box */}
      <div className="w-full bg-white border-[4px] border-black rounded-2xl py-12 px-4 text-center">
        <h1 className="font-betania text-6xl md:text-8xl tracking-wider text-black uppercase leading-tight">
          OLIVIA<br/>WRIGHT
        </h1>
      </div>
    </div>
  )
}

export default NameCard