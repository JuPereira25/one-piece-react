import React from 'react';
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header.jsx";

// Importações dos arquivos de estilo
import './Styles/global.css';

// Páginas
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Characters from './pages/Characters/Characters';
import Ships from './pages/Ships/Ships';

function App() {
  return (
    <>
      <Header />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/characters" element={<Characters />} />
        <Route path="/ships" element={<Ships />} />
      </Routes>
    </>
  );
}

export default App;
