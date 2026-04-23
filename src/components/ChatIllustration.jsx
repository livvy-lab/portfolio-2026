import React from 'react'
import chatBubble from '../assets/chat-bubble.svg'
import spreadLines from '../assets/spread-lines.svg'

const ChatIllustration = () => {
  return (
    /* Increased container width slightly to accommodate the bigger bubble */
    <div className="relative flex items-center justify-center w-[400px] md:w-[600px] aspect-square">
   
    <img 
        src={spreadLines} 
        alt="" 
        /* -top-12 pulls them up to hover over the top curve of the bubble */
        className="absolute -top-50 w-[110%] h-auto z-20 pointer-events-none"
    />

      {/* Main Bubble - Increased from 90% to w-full to make it as big as possible */}
      <img 
        src={chatBubble} 
        alt="" 
        className="relative z-10 w-80% h-auto" 
      />


      {/* Text Overlay - Highest z-index to stay clear of everything */}
      <div className="absolute inset-0 z-30 flex flex-col items-center justify-center font-figma-hand text-black -mt-10">
        <span className="text-6xl md:text-7xl leading-none">Let's</span>
        <span className="text-9xl md:text-[11rem] leading-none">Chat!</span>
      </div>
    </div>
  )
}

export default ChatIllustration