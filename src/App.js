import React, { useEffect, useState } from 'react';
import { Route, Routes, NavLink, useLocation } from 'react-router-dom'; // Импортируем useLocation
import './App.css';
import Header from './components/Header';
import Main from './pages/main';
import OurServices from './pages/OurServices';
function App() {
  return (
    <div className="App">
      <Header />
        <Routes>
          <Route path='/' element={<Main />} />
        </Routes>
      <OurServices/>
    </div>
    
  );
}

export default App;
