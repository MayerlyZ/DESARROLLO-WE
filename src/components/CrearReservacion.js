import React, { useState, useEffect } from 'react';
import axios from 'axios';

function CrearReservacion() {
  const [reservacion, setReservacion] = useState({
    nombreCompleto: '',
    correo: '',
    direccion: '',
    celular: '',
    fechaLlegada: '',
    fechaSalida: '',
    habitaciones: [],
    confirmada: false
  });

  const [habitacionesDisponibles, setHabitacionesDisponibles] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/api/habitaciones')
      .then(res => setHabitacionesDisponibles(res.data))
      .catch(err => console.log(err));
  }, []);

  const handleChange = (e) => {
    setReservacion({ ...reservacion, [e.target.name]: e.target.value });
  };

  const handleHabitacionSeleccionada = (e) => {
    const id = parseInt(e.target.value);
    if (isNaN(id)) return;

    const habitacion = habitacionesDisponibles.find(h => h.id === id);
    if (habitacion) {
      setReservacion({ ...reservacion, habitaciones: [habitacion] });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (reservacion.habitaciones.length === 0) {
      alert("Debes seleccionar una habitación");
      return;
    }

    axios.post('http://localhost:8080/api/reservas', reservacion)
      .then(() => {
        alert("Reserva creada exitosamente");
        setReservacion({
          nombreCompleto: '',
          correo: '',
          direccion: '',
          celular: '',
          fechaLlegada: '',
          fechaSalida: '',
          habitaciones: [],
          confirmada: false
        });
      })
      .catch(err => console.log(err));
  };

  return (
    <div className="container mt-4">
      <h2>Crear Reservación</h2>
      <form onSubmit={handleSubmit}>
        <input
          className="form-control my-2"
          name="nombreCompleto"
          placeholder="Nombre completo"
          value={reservacion.nombreCompleto}
          onChange={handleChange}
          required
        />
        <input
          className="form-control my-2"
          name="correo"
          placeholder="Correo"
          value={reservacion.correo}
          onChange={handleChange}
          required
        />
        <input
          className="form-control my-2"
          name="direccion"
          placeholder="Dirección"
          value={reservacion.direccion}
          onChange={handleChange}
          required
        />
        <input
          className="form-control my-2"
          name="celular"
          placeholder="Celular"
          value={reservacion.celular}
          onChange={handleChange}
          required
        />
        <input
          className="form-control my-2"
          type="date"
          name="fechaLlegada"
          value={reservacion.fechaLlegada}
          onChange={handleChange}
          required
        />
        <input
          className="form-control my-2"
          type="date"
          name="fechaSalida"
          value={reservacion.fechaSalida}
          onChange={handleChange}
          required
        />
        
        <select
          className="form-select my-2"
          onChange={handleHabitacionSeleccionada}
          required
        >
          <option value="">Seleccionar habitación</option>
          {habitacionesDisponibles.map(h => (
            <option key={h.id} value={h.id}>
              {h.tipo} - ${h.precioPorNoche} por noche
            </option>
          ))}
        </select>

        <button className="btn btn-success">Crear</button>
      </form>
    </div>
  );
}

export default CrearReservacion;
