import React from 'react';
import { Routes, Route, Link } from 'react-router-dom'; // 🔥 Solo importas Routes y Route, NO BrowserRouter
import HabitacionesList from './components/HabitacionesList';
import CrearHabitacion from './components/CrearHabitacion';
import ReservacionList from './components/ReservacionList';
import CrearReservacion from './components/CrearReservacion';
import Inicio from './components/Inicio';

function Admin() {
  return (
    <div className="container mt-4">
      <nav className="navbar navbar-expand-lg navbar-light bg-light mb-4">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">Hotel Jireh</Link>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/habitaciones">Lista Habitaciones</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/crear-habitacion">Crear Habitación</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/reservaciones">Lista Reservaciones</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/crear-reservacion">Crear Reservación</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/habitaciones" element={<HabitacionesList />} />
        <Route path="/crear-habitacion" element={<CrearHabitacion />} />
        <Route path="/reservaciones" element={<ReservacionList />} />
        <Route path="/crear-reservacion" element={<CrearReservacion />} />
      </Routes>
    </div>
  );
}

export default Admin;
