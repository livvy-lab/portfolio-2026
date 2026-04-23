import React from 'react'
import FolderContainer from '../components/FolderContainer'
import ContactForm from '../components/ContactForm'
import ChatIllustration from '../components/ChatIllustration'

const Contact = ({ cabinetColor, folderColor }) => {
  return (
    <FolderContainer 
      activeTab="Contact" 
      cabinetColor={cabinetColor} 
      folderColor={folderColor}
    >
      {/* Added min-h-full and flex-col to ensure the content 
          takes up the space and pushes the footer to the bottom 
      */}
      <div className="flex flex-col items-center justify-between w-full min-h-[80vh] pt-20 pb-10 px-6">
        
        {/* Main Content Wrapper */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-20 w-full flex-grow">
          {/* Left Side: Illustration */}
          <div className="flex-shrink-0">
            <ChatIllustration />
          </div>

          {/* Right Side: The Form */}
          <ContactForm />
        </div>

        {/* The Credit Footer */}
        <footer className="mt-20 w-full text-center">
          <p className="font-mont font-bold text-black/40 text-sm md:text-base tracking-wide">
            DESIGNED & BUILT BY OLIVIA WRIGHT • 
            <span className="ml-1">
              INSPIRED BY{' '}
              <a 
                href="https://braydenfriesen.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="underline hover:text-black transition-colors"
              >
                BRAYDEN FRIESEN
              </a>
            </span>
          </p>
        </footer>
        
      </div>
    </FolderContainer>
  )
}

export default Contact