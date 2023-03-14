import React from 'react';
import Home from './components/Home';
import FavList from './components/FavList ';
import Movie from './components/Movie';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/FavList' element={<FavList />} />
      <Route path='/movie' element={<Movie />} />

    </Routes>
    </div>
  );
}

export default App;