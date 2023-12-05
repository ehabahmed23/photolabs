import React from 'react';
import '../styles/HomeRoute.scss';
import TopNavigationBar from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';
import photos from 'mocks/photos';
import topics from 'mocks/topics';

const HomeRoute = (props) => {


  return (
    <div className="home-route">
      <TopNavigationBar topics={topics} favPhotoCount={props.favouritedPhotos.length}/>
      <PhotoList photos={photos} toggleFav={props.toggleFav} favouritedPhotos={props.favouritedPhotos} openModal={props.openModal}/>
    </div>
  );
};

export default HomeRoute;
