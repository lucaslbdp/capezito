import React from "react";
import ayudarte from "../img/ayudarte.png";
import "./Articles.css";

const PodemosAyudarte = () => {
  return (
    <div
      className="podemosAyudarteContainer"
      style={{ display: "flex", flexDirection: "column" }}
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
          width="150px"
          className="mt-5 pt-5"
        />
        <h1
          style={{
            textTransform: "initial",
            letterSpacing: "0cm",
            color: "#818181",
            fontSize: "40px",
          }}
        >
          <strong>¿Cómo podemos ayudarte?</strong>
        </h1>
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
          style={{
            textTransform: "initial",
            color: "#9a9a9a",
            letterSpacing: "0cm",
          }}
          className="pb-5"
        >
          Tenemos los servicios de comunicación <br></br>que tu empresa necesita
        </h3>
      </div>
    </div>
  );
};

export default PodemosAyudarte;
