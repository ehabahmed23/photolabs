import React, { useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton(props) {
  
  // const [like, setLike] = useState(false);

  // const handleClick = () => {

  //   if (like) {
  //     setLike(false)
  //   } else {
  //     setLike(true)
  //   }
  // };

  return (
    <div className="photo-list__fav-icon" >
      <div className="photo-list__fav-icon-svg" onClick={() => props.toggleFav(props.photoId)}>
        <FavIcon selected={props.selected} />
      </div>
    </div>
  );
}

export default PhotoFavButton;