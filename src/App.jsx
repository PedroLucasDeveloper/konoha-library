import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Characters from './pages/Characters';
import Jutsus from './pages/Jutsus';
import Clans from './pages/Clans';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header />
      <Routes>
      <Route path="/konoha-library" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/characters" element={<Characters />} />
        <Route path="/jutsus" element={<Jutsus />} />
        <Route path="/clans" element={<Clans />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;