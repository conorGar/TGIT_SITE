import React from 'react';
import Header from './Pages/Pages/Header';
import Video from './Pages/Pages/Video';
import DescriptionBoxes from './Pages/Pages/DescriptionBoxes';
import TitlePNG from './assets/title.png'
import Photos from './Pages/Pages/Photos'
import './App.css';

function App() {
  return (
    <div className="App">
      <div className='title-container'>
        <img className='title-image' src={TitlePNG} />
      </div>
      <Header />
      <Video />
      <DescriptionBoxes />
      <Photos />
    </div>
  );
}

export default App;
