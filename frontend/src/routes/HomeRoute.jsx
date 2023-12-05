import React from 'react';
import '../styles/HomeRoute.scss';
import TopNavigationBar from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';
import { useState } from 'react';
import photos from 'mocks/photos';
import topics from 'mocks/topics';

const HomeRoute = () => {

  const [favPhotos, setFavPhotos] = useState([]);

  const toggleFav = (photoId) => { 
    setFavPhotos(
      favPhotos.includes(photoId)
        ? favPhotos.filter((fave) => fave !== photoId) 
        : [...favPhotos, photoId] 
    );
  };

  console.log(favPhotos)
  return (
    <div className="home-route">
      <TopNavigationBar topics={topics} favPhotoCount={favPhotos.length}/>
      <PhotoList photos={photos} toggleFav={toggleFav} favouritedPhotos={favPhotos}/>
    </div>
  );
};

export default HomeRoute;
