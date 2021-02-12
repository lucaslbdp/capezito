import React from "react";
import Carrusel from "../Otros/Carrusel";
import Jumbo from "../Otros/Jumbo";
import ".././App.css";
import Articles from "../Components/Articles";
import Contacto from "../Otros/Contacto";
import PodemosAyudarte from "../Components/PodemosAyudarte";

const Inicio = () => {
  return (
    <div style={{ width: "100%" }}>
      <Carrusel />
      <PodemosAyudarte />
      <Jumbo />
      <Articles />
      <Contacto />
    </div>
  );
};

export default Inicio;
