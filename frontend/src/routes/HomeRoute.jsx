import React from 'react';
import '../styles/HomeRoute.scss';
import TopNavigationBar from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';
import { useState } from 'react';

const HomeRoute = (props) => {

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
      <TopNavigationBar topics={props.topics} />
      <PhotoList photos={props.photos} toggleFav={toggleFav} favouritedPhotos={favPhotos}/>
    </div>
  );
};

export default HomeRoute;
