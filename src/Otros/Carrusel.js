import React from "react";
import "./Carrusel.css";
import slider1 from "../img/slider1.png";
import imgCapez from "../img/imgCapez.jpeg";


const Nosotros = () => {

  return (
    <div className="container-carrusel">
      <div className="carrusel-img col-md-7">
        <img src={slider1} alt="slider" className="img-slider"></img>
      </div>
      <div className="col-sm-12 col-md-5 pl-0">
        <img src={imgCapez} alt="capez" className="img-capez"></img>
      </div>
    </div>
  );
};

export default Nosotros;
