import React from 'react';
import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import { useState } from 'react';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';



 const App = () => {

  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = () => {
    setIsModalOpen(true);
  };


  return(
   <div className="App">
    <HomeRoute openModal={openModal}/>
    {isModalOpen && (<PhotoDetailsModal />)}
   </div>)
 }


export default App;
