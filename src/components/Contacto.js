import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Contacto = () => {
  return (
    <div className="container">
      <h1 className="text-center mb-4">Contáctanos</h1>

      <form className="mb-5">
        <div className="mb-3">
          <label>Nombre</label>
          <input type="text" className="form-control" placeholder="Tu nombre" />
        </div>
        <div className="mb-3">
          <label>Correo</label>
          <input type="email" className="form-control" placeholder="Tu correo" />
        </div>
        <div className="mb-3">
          <label>Mensaje</label>
          <textarea className="form-control" rows="4" placeholder="Tu mensaje"></textarea>
        </div>
        <button className="btn btn-primary">Enviar</button>
      </form>

      {/* Redes sociales */}
      <div className="text-center mb-4">
        <a href="https://www.instagram.com" className="btn btn-outline-primary m-2">Instagram</a>
        <a href="https://www.facebook.com" className="btn btn-outline-primary m-2">Facebook</a>
        <a href="https://www.whatsapp.com" className="btn btn-outline-success m-2">WhatsApp</a>
      </div>

      {/* Ubicación */}
      <div className="text-center">
        <h4>Nuestra ubicación</h4>
        <iframe
          src="https://www.google.com/maps/embed?...tu enlace..."
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default Contacto;
