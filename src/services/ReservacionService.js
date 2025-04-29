import axios from "axios";

const API_URL = "http://localhost:8080/api/reservas";

export const obtenerReservas = () => axios.get(API_URL);

export const crearReserva = (reserva) => axios.post(API_URL, reserva);

export const actualizarReserva = (id, reserva) => axios.put(`${API_URL}/${id}`, reserva);

export const eliminarReserva = (id) => axios.delete(`${API_URL}/${id}`);
