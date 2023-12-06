import { useReducer } from "react";

import topics from 'mocks/topics';
import photos from 'mocks/photos';

const ACTIONS = {
  SET_PHOTO_DATA: 'SET_PHOTO_DATA',
  SET_TOPIC_DATA: 'SET_TOPIC_DATA',
  TOGGLE_FAV: 'TOGGLE_FAV',
  OPEN_MODAL: 'OPEN_MODAL',
  CLOSE_MODAL: 'CLOSE_MODAL'
};

const reducer = (state, action) => {
  switch (action.type) {
  case ACTIONS.TOGGLE_FAV:
    return { ...state, favPhotos: state.favPhotos.includes(action.photoId)
      ? state.favPhotos.filter((fave) => fave !== action.photoId) 
      : [...state.favPhotos, action.photoId]};
  case ACTIONS.OPEN_MODAL:
    return { ...state, clickedPhoto: action.photo, isModalOpen: true};
  case ACTIONS.CLOSE_MODAL:
    return { ...state, clickedPhoto: null, isModalOpen: false};
  case ACTIONS.SET_PHOTO_DATA:
    return { ...state, photos:action.photos};
  case ACTIONS.SET_TOPIC_DATA:
    return { ...state, topics:action.topics};

  default:
    return state;
  }
};

const useApplicationData = () => {

  const defaultState = {
    clickedPhoto: null,
    isModalOpen: false,
    favPhotos: [],
    photos: photos,
    topics: topics
  };

  const [state, dispatch] = useReducer(reducer, defaultState);

  const openModal = (photo) => {
    dispatch({type: ACTIONS.OPEN_MODAL, photo});
  };

  const closeModal = () => {
    dispatch({type: ACTIONS.CLOSE_MODAL});
  };

  const toggleFav = (photoId) => {
    dispatch({type: ACTIONS.TOGGLE_FAV, photoId});
  };

  return {
    state,
    dispatch,
    openModal,
    closeModal,
    toggleFav
  };
};
  
export default useApplicationData;