import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Inicio from './pages/Inicio';
import Sobre from './pages/Sobre';
import Servico from './pages/Servico';
import Portfolio from './pages/Portfolio';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Inicio />} />
      <Route path="/sobre" element={<Sobre />} />
      <Route path="/servicos" element={<Servico />} />
      <Route path="/portifolio" element={<Portfolio />} />
    </Routes>
  );
}

export default AppRoutes;
