import React from 'react';
import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import useApplicationData from 'hooks/useApplicationData';
import topics from 'mocks/topics';
import photos from 'mocks/photos';

 const App = () => {

  const {
    clickedPhoto,
    isModalOpen,
    favPhotos,
    openModal,
    closeModal,
    toggleFav
  } = useApplicationData();

  return(
   <div className="App">
    <HomeRoute photos={photos} topics={topics} openModal={openModal} toggleFav={toggleFav} favouritedPhotos={favPhotos}/>
    {isModalOpen && (
    <PhotoDetailsModal 
      clickedPhoto={clickedPhoto} 
      closeModal={closeModal} 
      toggleFav={toggleFav} 
      favouritedPhotos={favPhotos} />)}
   </div>
   )
 }


export default App;
