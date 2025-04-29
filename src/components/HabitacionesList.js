import React, { useEffect, useState } from "react";
import { obtenerHabitaciones, eliminarHabitacion } from "../services/HabitaciService"; // Ajusta la ruta si es necesario

const HabitacionesList = () => {
  const [habitaciones, setHabitaciones] = useState([]);

  useEffect(() => {
    cargarHabitaciones();
  }, []);

  const cargarHabitaciones = async () => {
    try {
      const res = await obtenerHabitaciones();
      setHabitaciones(res.data);
    } catch (error) {
      console.error("Error al cargar habitaciones:", error);
    }
  };

  const borrarHabitacion = async (id) => {
    try {
      await eliminarHabitacion(id);
      cargarHabitaciones();
    } catch (error) {
      console.error("Error al eliminar habitación:", error);
    }
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Lista de Habitaciones</h2>

      {habitaciones.length === 0 ? (
        <p>No hay habitaciones registradas.</p>
      ) : (
        <div className="row">
          {habitaciones.map((hab) => (
            <div className="col-md-4" key={hab.id}>
              <div className="card mb-3 shadow-sm">
                {hab.imagenUrl && (
                  <img
                    src={hab.imagenUrl}
                    className="card-img-top"
                    alt={`Imagen de ${hab.tipo}`}
                    style={{ height: "200px", objectFit: "cover" }}
                  />
                )}
                <div className="card-body">
                  <h5 className="card-title text-capitalize">{hab.tipo}</h5>
                  <p className="card-text">{hab.descripcion}</p>
                  <p><strong>Precio:</strong> ${hab.precioPorNoche} COP</p>
                  <p><strong>Capacidad:</strong> {hab.capacidad} personas</p>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => borrarHabitacion(hab.id)}
                  >
                    Eliminar
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default HabitacionesList;
