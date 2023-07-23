import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './components/Home/'
import About from './components/About/'
import Archive from './components/Archive/'
import Editor from './components/Editor/'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/archive' element={<Archive />} />
        <Route path='/editor' element={<Editor />} />
      </Routes>
    </BrowserRouter>
  );
}
