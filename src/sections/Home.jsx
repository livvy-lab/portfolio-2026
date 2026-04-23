import React from 'react'
import FolderContainer from '../components/FolderContainer'
import NameCard from '../components/NameCard'

const Home = ({ cabinetColor, folderColor }) => {
    return (
      <FolderContainer 
        activeTab="Home" 
        cabinetColor={cabinetColor} 
        folderColor={folderColor}
        showSocials={true}
      >
        <NameCard />
      </FolderContainer>
    )
  }

export default Home