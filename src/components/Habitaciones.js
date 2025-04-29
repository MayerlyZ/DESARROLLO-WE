import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

const Habitaciones = () => {
  const [habitaciones, setHabitaciones] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/api/habitaciones')  // Ajusta tu endpoint
      .then(response => setHabitaciones(response.data))
      .catch(error => console.error('Error al obtener habitaciones', error));
  }, []);

  return (
    <div className="container">
      <h1 className="text-center mb-4">Nuestras Habitaciones</h1>
      <div className="row">
        {habitaciones.map(habitacion => (
          <div className="col-md-4 mb-4" key={habitacion.id}>
            <div className="card h-100">
              <img src={habitacion.imagenPrincipal} className="card-img-top" alt="Habitación" />
              <div className="card-body">
                <h5 className="card-title">{habitacion.nombre}</h5>
                <p className="card-text">{habitacion.descripcion}</p>
                <ul>
                  <li>Capacidad: {habitacion.capacidad} personas</li>
                  <li>Precio por noche: ${habitacion.precio}</li>
                  <li>Incluye: {habitacion.servicios}</li>
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Habitaciones;  // Asegúrate de exportar correctamente el componente
