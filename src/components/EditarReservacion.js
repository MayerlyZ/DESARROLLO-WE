import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const EditarReservacion = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [reservacion, setReservacion] = useState({
    nombreCompleto: "",
    correo: "",
    fechaLlegada: "",
    fechaSalida: "",
    precioTotal: ""
  });

  useEffect(() => {
    const cargarReservacion = async () => {
      try {
        const res = await axios.get(`http://localhost:8080/api/reservas/${id}`);
        setReservacion(res.data);
      } catch (error) {
        console.error("Error al cargar la reservación:", error);
      }
    };
    cargarReservacion();
  }, [id]);

  const handleChange = (e) => {
    setReservacion({ ...reservacion, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:8080/api/reservas/${id}`, reservacion);
      alert("Reservación actualizada con éxito");
      navigate("/admin/reservaciones");
    } catch (error) {
      console.error("Error al actualizar la reservación:", error);
    }
  };

  return (
    <div className="container mt-4 d-flex justify-content-center">
      <div className="card p-4 shadow" style={{ width: '100%', maxWidth: '600px' }}>
        <h2 className="mb-4">Editar Reservación</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Nombre completo</label>
            <input
              type="text"
              className="form-control"
              name="nombreCompleto"
              value={reservacion.nombreCompleto}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Correo</label>
            <input
              type="email"
              className="form-control"
              name="correo"
              value={reservacion.correo}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Fecha de llegada</label>
            <input
              type="date"
              className="form-control"
              name="fechaLlegada"
              value={reservacion.fechaLlegada}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Fecha de salida</label>
            <input
              type="date"
              className="form-control"
              name="fechaSalida"
              value={reservacion.fechaSalida}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Precio total</label>
            <input
              type="number"
              className="form-control"
              name="precioTotal"
              value={reservacion.precioTotal}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">Actualizar</button>
        </form>
      </div>
    </div>
  );
};

export default EditarReservacion;
