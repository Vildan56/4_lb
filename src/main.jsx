import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Home from './pages/Home';
import Favorites from './pages/Favorites';
import Details from './pages/Details'; // Импортируем компонент детальной страницы
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="favorites" element={<Favorites />} />
          <Route path="details/:id" element={<Details />} /> {/* Маршрут для детальной страницы */}
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);