import React from "react";

import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";

const PhotoListItem = (props) => {

  return (
    <div className="photo-list__item">
      <PhotoFavButton toggleFav={props.toggleFav} selected={props.favouritedPhotos.includes(props.photoId)} photoId={props.photoId} />
      <img className="photo-list__image"  alt="image source" src={props.imageSource} onClick={props.openModal} />
      <div className="photo-list__user-details">
        <img className="photo-list__user-profile"  alt="profile picture" src={props.profile} />
        <div className="photo-list__user-info">
          {props.username}
          <div className="photo-list__user-location">{props.city}, {props.country}</div>
        </div>
      </div>
    </div>
  )
};

export default PhotoListItem;
