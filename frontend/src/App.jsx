import React from 'react';
import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import useApplicationData from 'hooks/useApplicationData';
import topics from 'mocks/topics';
import photos from 'mocks/photos';

 const App = () => {

  const {
    state,
    openModal,
    closeModal,
    toggleFav
  } = useApplicationData();

  return(
   <div className="App">
    <HomeRoute photos={photos} topics={topics} openModal={openModal} toggleFav={toggleFav} favouritedPhotos={state.favPhotos}/>
    {state.isModalOpen && (
    <PhotoDetailsModal 
      clickedPhoto={state.clickedPhoto} 
      closeModal={closeModal} 
      toggleFav={toggleFav} 
      favouritedPhotos={state.favPhotos} />)}
   </div>
   )
 }


export default App;
