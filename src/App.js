import React, { useState } from 'react';
import { Route, Routes, Link, useLocation } from 'react-router-dom'; // Importar useLocation
import './App.css';
import axios from 'axios';
import fondo from './assets/fondo.jpg';
import logo from './assets/logo.avif';
import Inicio from './components/Inicio';
import Habitaciones from './components/Habitaciones';
import Servicios from './components/Servicios';
import Contacto from './components/Contacto';
import { useNavigate } from 'react-router-dom'; // IMPORTANTE
import Admin from './admin'; // O la ruta donde esté tu Admin.js

function App() {
  const [formulario, setFormulario] = useState(false);
  const [reserva, setReserva] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const location = useLocation();
  const navigate = useNavigate(); // IMPORTANTE


  const clic = () => {
    setFormulario(!formulario);
  };

  const clic2 = () => {
    setReserva(!reserva);
  };
  
  const handleLogin = async () => {
    try {
      const response = await fetch('http://localhost:8080/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
      });
  
      if (response.ok) {
        alert('Login exitoso');
        window.open('/admin', '_blank'); // 🔥 ABRIR EN NUEVA PESTAÑA
      } else {
        alert('Error al iniciar sesión');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error de conexión');
    }
  };
  
  return (
    <div
      className="main"
      style={{
        backgroundImage: `url(${fondo})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        color: 'white',
        position: 'relative',
      }}
    >
      <img src={logo} alt="Logo" className="logo" />
      {/* NAVBAR */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" to="/">INICIO</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/habitaciones">HABITACIONES</Link>
              </li>
            </ul>

            <div className="center-title mx-auto d-none d-lg-block">
              JIREH
            </div>

            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/servicios">SERVICIOS</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contacto">CONTACTANOS</Link>
              </li>
            </ul>

            <div className="user-icon ms-3" onClick={clic}>
              👤
            </div>
          </div>
        </div>
      </nav>

      {/* Mostrar contenido solo en la página principal */}
      {location.pathname === "/" && (
        <div className="content">
          <div className="text-box">
            <h3>BIENVENIDOS</h3>
            <h1>Donde la naturaleza y la diversión<br />se encuentran</h1>
            <p>San Carlos Antioquia</p>
            <button onClick={clic2}>RESERVA AHORA</button>
          </div>

          {formulario && (
            <div className="login-box">
              <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <a href="#" className="forgot">¿Olvidaste tu contraseña?</a>
              <button className="login-btn" onClick={handleLogin}>Ingresar</button>
            </div>
          )}

          {reserva && (
            <div className="formu-reserva">
              <h2>Formulario de Reserva</h2>
              <form>
                <div className="form-row">
                  <div>
                    <label>Fecha de entrada:</label>
                    <input type="date" />
                  </div>
                  <div>
                    <label>Fecha de salida:</label>
                    <input type="date" />
                  </div>
                  <div>
                    <label>Número de personas:</label>
                    <input type="number" placeholder="Cantidad" />
                  </div>
                  <div>
                    <label>Tipo de habitación:</label>
                    <select>
                      <option>Individual</option>
                      <option>Doble</option>
                      <option>Familiar</option>
                    </select>
                  </div>
                </div>

                <div className="form-grid">
                  <div>
                    <label>Nombre:</label>
                    <input type="text" placeholder="Tu nombre" />
                  </div>
                  <div>
                    <label>Celular:</label>
                    <input type="tel" placeholder="Tu número" />
                  </div>
                  <div>
                    <label>Documento:</label>
                    <input type="text" placeholder="Número de documento" />
                  </div>
                  <div>
                    <label>Correo electrónico:</label>
                    <input type="email" placeholder="Tu correo" />
                  </div>
                </div>

                <button type="submit">Confirmar Reserva</button>
              </form>
            </div>
          )}
        </div>
      )}

      {/* Rutas */}
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/habitaciones" element={<Habitaciones />} />
        <Route path="/servicios" element={<Servicios />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/admin/*" element={<Admin />} /> 
      </Routes>

    </div>
  );
}

export default App;
