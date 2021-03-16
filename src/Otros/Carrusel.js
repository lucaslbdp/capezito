import React from "react";
import "./Carrusel.css";
import slider1 from "../img/slider1.png"


const Nosotros = () => {

  return (
    <div className="container-carrusel">
      <div className="carrusel-img col-md-7">
        <img src={slider1} alt="slider" className="img-slider"></img>
      </div>
      <div className="texto-carrusel col-sm-12 col-md-4 col-lg-3">
        <h2 className="text-center texto-h2">Hacé tu comunicación eficiente  </h2>
      </div>
    </div>
  );
};

export default Nosotros;
