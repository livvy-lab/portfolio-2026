import React from 'react'

const NameCard = () => {
  return (
    <div className="w-full max-w-2xl bg-brutal-blue border-[4px] border-black rounded-[2.5rem] p-8 shadow-brutal-lg flex flex-col items-center">
      <div className="text-white text-center mb-6">
        <h2 className="text-6xl font-black tracking-tighter italic leading-none">HELLO</h2>
        <p className="text-xl font-bold uppercase tracking-[0.2em] mt-2">My Name Is</p>
      </div>
      
      <div className="w-full bg-white border-[4px] border-black rounded-2xl py-12 px-4 text-center">
      <h1 className="font-betania text-6xl md:text-8xl tracking-wider text-black uppercase leading-tight">
        OLIVIA<br/>WRIGHT
      </h1>
      </div>
    </div>
  )
}

export default NameCard