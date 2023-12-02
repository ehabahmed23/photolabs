import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton(props) {
  



  return (
    <div className="photo-list__fav-icon" onClick={props.handleClick}>
      <div className="photo-list__fav-icon-svg" >
        <FavIcon selected={props.like} />
      </div>
    </div>
  );
}

export default PhotoFavButton;