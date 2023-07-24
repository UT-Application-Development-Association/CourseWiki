import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import NavigationBar from './components/NavigationBar'
import Home from './components/Home/'
import About from './components/About/'
import Archive from './components/Archive/'
import Editor from './components/Editor/'
import NotFound from './components/NotFound/'

const routes = [
  { path: '/', element: <Home /> },
  { path: '/home', element: <Home /> },
  { path: '/about', element: <About /> },
  { path: '/archive', element: <Archive /> },
  { path: '/editor', element: <Editor /> },
];

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <NavigationBar>
          <Routes>
            {routes.map(({ path, element }, index) => (
              <Route key={index} path={path} element={element} />
            ))}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </NavigationBar>
      </BrowserRouter>
    </div>
  );
}
