import React from "react";
import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";

const PhotoList = (props) => {

  const photoList = props.photos.map((photo) => <PhotoListItem 
  key={photo.id}
  photoId={photo.id}
  imageSource={photo.urls.regular}
  imageSourceFull={photo.urls.full}
  profile={photo.user.profile}
  name={photo.user.name}
  username={photo.user.username}
  city={photo.location.city}
  country={photo.location.country}
  toggleFav={props.toggleFav}
  favouritedPhotos={props.favouritedPhotos}
  openModal={props.openModal} />) 

  return (
    <ul className="photo-list">
      {photoList}
    </ul>
  );
};

export default PhotoList;
