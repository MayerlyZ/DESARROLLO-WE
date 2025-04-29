import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Servicios = () => {
  return (
    <div className="container">
      <h1 className="text-center mb-4">Nuestros Servicios</h1>

      <div className="row">
        {/* Piscina */}
        <div className="col-md-6 mb-4">
          <div className="card">
            <img src="https://tu-imagen-de-piscina.jpg" className="card-img-top" alt="Piscina" />
            <div className="card-body">
              <h5 className="card-title">Piscina</h5>
              <p className="card-text">Relájate en nuestra piscina climatizada al aire libre con área de descanso.</p>
            </div>
          </div>
        </div>

        {/* Restaurante */}
        <div className="col-md-6 mb-4">
          <div className="card">
            <img src="https://tu-imagen-de-restaurante.jpg" className="card-img-top" alt="Restaurante" />
            <div className="card-body">
              <h5 className="card-title">Restaurante</h5>
              <p className="card-text">Gastronomía nacional e internacional en nuestro restaurante gourmet.</p>
            </div>
          </div>
        </div>

        {/* Bar */}
        <div className="col-md-6 mb-4">
          <div className="card">
            <img src="https://tu-imagen-de-bar.jpg" className="card-img-top" alt="Bar" />
            <div className="card-body">
              <h5 className="card-title">Bar</h5>
              <p className="card-text">Disfruta de cócteles, música en vivo y un ambiente vibrante en nuestro bar.</p>
            </div>
          </div>
        </div>

        {/* Gimnasio */}
        <div className="col-md-6 mb-4">
          <div className="card">
            <img src="https://tu-imagen-de-gimnasio.jpg" className="card-img-top" alt="Gimnasio" />
            <div className="card-body">
              <h5 className="card-title">Gimnasio</h5>
              <p className="card-text">Mantente en forma en nuestro gimnasio equipado con modernas máquinas.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Servicios;
