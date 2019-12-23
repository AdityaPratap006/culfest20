import React from 'react';
import './App.css';
import { Route }  from 'react-router-dom';

import Home from './pages/Home/Home.jsx';
import  Gallery  from './pages/Gallery/Gallery.jsx';

function App() {
  
  return (
    <div className="App">
       <Home/>
       <Gallery/>
    </div>
  );
}

export default App;
