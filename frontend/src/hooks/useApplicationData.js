import { useState } from "react";

const useApplicationData = () => {
  const [clickedPhoto, setClickedPhoto] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [favPhotos, setFavPhotos] = useState([]);

  const openModal = (photo) => {
    setClickedPhoto(photo);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setClickedPhoto(null);
    setIsModalOpen(false);
  };

  const toggleFav = (photoId) => { 
    setFavPhotos(
      favPhotos.includes(photoId) 
        ? favPhotos.filter((fave) => fave !== photoId) 
        : [...favPhotos, photoId] 
    ); 

  };

  return {
    clickedPhoto,
    isModalOpen,
    favPhotos,
    openModal,
    closeModal,
    toggleFav
  };
};


export default useApplicationData; 