import React from 'react';
import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import { useState } from 'react';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';



 const App = () => {

  const [isModalOpen, setIsModalOpen] = useState(false)
  const [clickedPhoto, setClickedPhoto] = useState(false)
  const [favPhotos, setFavPhotos] = useState([]);

  const openModal = (photo) => {
    setClickedPhoto(photo)
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setClickedPhoto(null)
    setIsModalOpen(false)
  }

  const toggleFav = (photoId) => { 
    setFavPhotos(
      favPhotos.includes(photoId)
        ? favPhotos.filter((fave) => fave !== photoId) 
        : [...favPhotos, photoId] 
    );
  };

  return(
   <div className="App">
    <HomeRoute openModal={openModal} toggleFav={toggleFav} favouritedPhotos={favPhotos}/>
    {isModalOpen && (<PhotoDetailsModal clickedPhoto={clickedPhoto} closeModal={closeModal} toggleFav={toggleFav} favouritedPhotos={favPhotos} />)}
   </div>)
 }


export default App;
