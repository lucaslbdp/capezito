import React from "react";
import ayudarte from "../img/ayudarte.png";
import "./Ayuda.css";

const PodemosAyudarte = () => {
  return (
    <div
      className="podemosAyudarteContainer"
    >
      <div
        className="podemosAyudarteTitle"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <img
          src={ayudarte}
          alt="img ayudar"
          className="ayuda-img"
        />
        <p className="titulo"
        >
          <strong>¿Cómo podemos ayudarte?</strong>
        </p>
      </div>
      <div
        className="podemosAyudarteDescription"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <h3
          className="pb-4 parrafo"
        >
          Tenemos los servicios de comunicación <br></br>que tu empresa necesita
        </h3>
      </div>
    </div>
  );
};

export default PodemosAyudarte;
