import React from 'react'
import FolderContainer from '../components/FolderContainer'
import ContactForm from '../components/ContactForm'
import chatBubble from '../assets/chat-bubble.svg'
import spreadLines from '../assets/spread-lines.svg'

const Contact = ({ cabinetColor, folderColor }) => {
  return (
    <FolderContainer 
      activeTab="Contact" 
      cabinetColor={cabinetColor} 
      folderColor={folderColor} // This will be your pink folder
    >
      <div className="flex flex-col lg:flex-row items-center justify-center gap-16 lg:gap-32 w-full py-24 px-6">
        
        {/* Left Side: Hand-drawn Illustration */}
        <div className="relative flex items-center justify-center">
          {/* Spread Lines SVG - positioned behind bubble */}
          <img 
            src={spreadLines} 
            alt="" 
            className="absolute -top-16 -left-12 w-72 pointer-events-none"
          />
          
          <div className="relative">
            <img 
              src={chatBubble} 
              alt="Chat Container" 
              className="w-80 md:w-96 h-auto" 
            />
            {/* Overlaying the text manually in case the SVG doesn't have it baked in */}
            <div className="absolute inset-0 flex flex-col items-center justify-center font-figma-hand text-black leading-none -rotate-6 pt-4">
              <span className="text-4xl">Let's</span>
              <span className="text-7xl">Chat!</span>
            </div>
          </div>
        </div>

        {/* Right Side: The Form Component */}
        <ContactForm />
        
      </div>
    </FolderContainer>
  )
}

export default Contact