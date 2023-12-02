import React from "react";

import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";



const PhotoList = (props) => {

  const photoList = props.photos.map((photo) => <PhotoListItem key={photo.id} {...photo}  />) 
  return (
    <ul className="photo-list">
      {photoList}
    </ul>
  );
};

export default PhotoList;
