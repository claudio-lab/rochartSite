import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Inicio from './pages/Inicio';
import Sobre from './pages/Sobre';
import Servico from './pages/Servico';
import Portfolio from './pages/Portfolio';
import Contacto from './pages/Contacto';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Inicio />} />
      <Route path="/sobre" element={<Sobre />} />
      <Route path="/servicos" element={<Servico />} />
      <Route path="/portifolio" element={<Portfolio />} />
      <Route path="/contacto" element={<Contacto />} />
    </Routes>
  );
}

export default AppRoutes;
