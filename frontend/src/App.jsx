import React from 'react';
import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import useApplicationData from 'hooks/useApplicationData';

 const App = () => {

  const {
    ACTIONS,
    state,
    dispatch,
    openModal,
    closeModal,
    toggleFav
  } = useApplicationData();

  return(
   <div className="App">
    <HomeRoute photos={state.photos} topics={state.topics} ACTIONS={ACTIONS} dispatch={dispatch} openModal={openModal} toggleFav={toggleFav} favouritedPhotos={state.favPhotos}/>
    {state.isModalOpen && (
    <PhotoDetailsModal 
      clickedPhoto={state.clickedPhoto}
      openModal={openModal}
      closeModal={closeModal} 
      toggleFav={toggleFav} 
      favouritedPhotos={state.favPhotos} />)}
   </div>
   )
 }


export default App;
