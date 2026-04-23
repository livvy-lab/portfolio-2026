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
      <div className="flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-20 w-full py-20 px-6">
        
        {/* Left Side: The new Illustration Component */}
        <div className="flex-shrink-0">
          <ChatIllustration />
        </div>

        {/* Right Side: The Form Component */}
        <ContactForm />
        
      </div>
    </FolderContainer>
  )
}

export default Contact