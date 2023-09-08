import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Movie from './components/Movie.jsx';
import Home from './components/Home';

export default function App() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/:id" element={<Movie />} />
    </Routes>
  );
}
