import './App.css';
import React from 'react';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Watchpage from './pages/watch';
import Home from './pages/home';

function App() {

  return (
    <div className='App'>
        <Watchpage />
        <Home />
    </div>
  );
}

export default App;