import React from "react";
import { useState } from "react";

import PhotoFavButton from "./PhotoFavButton";
import "../styles/PhotoListItem.scss";

const PhotoListItem = (props) => {
  const [like, setLike] = useState(false);
  const handleClick = () => {
    if (like) {
      setLike(false)
    } else {
      setLike(true)
    }
  };


  return (
    <div className="photo-list__item">
      <PhotoFavButton handleClick={handleClick} like={like}/>
      <img className="photo-list__image" src={props.urls.regular} alt="image source" />
      <div className="photo-list__user-details">
        <img className="photo-list__user-profile" src={props.user.profile} alt="profile picture" />
        <div className="photo-list__user-info">
          {props.user.username}
          <div className="photo-list__user-location">{props.location.city}, {props.location.country}</div>
        </div>
      </div>
    </div>
  )
};

export default PhotoListItem;
