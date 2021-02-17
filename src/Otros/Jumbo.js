import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import "../App.css";
import capezGris from "../img/capezGris.png";
import "./Jumbo.css";




const Jumbo = () => {
  return (
    <Jumbotron
      className="mt-5 text-center shadow-sm mb-0 pt-0 col-sm-12"
      style={{ backgroundImage: "url(./back.png)", width: "100%" }}
    >
      <img src={capezGris} className="pb-0 mb-0" alt="logo capez"></img>
      <h2
        style={{
          textTransform: "initial",
          letterSpacing: "0cm",
          fontSize: "45px",
          color: "white",
        }}
        className="mb-3"
      >
        <strong>Nosotros</strong>
      </h2>
      <p style={{ fontSize: "22px", color: "white" }} className="mb-4">
        Somos una empresa tucumana que llega para brindar la mejor calidad{" "}
        <br></br>en comunicación a través de un servicio automático y
        personalizado a la vez,<br></br> dejando resultados reales y eficaces.
      </p>
    </Jumbotron>
  );
};

export default Jumbo;
