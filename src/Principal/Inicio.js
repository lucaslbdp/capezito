import React from "react";
import Carrusel from "../Otros/Carrusel";
import Jumbo from "../Otros/Jumbo";
import ".././App.css";
import Multimedia from "../Otros/Multimedia";
import Articles from "../Components/Articles";
import Contacto from "../Otros/Contacto";
import PodemosAyudarte from "../Components/PodemosAyudarte";

const Inicio = () => {
  return (
    <div>
      <Carrusel />
      <PodemosAyudarte />
      <Jumbo />
      <Articles />
      <Multimedia />
      <Contacto />
    </div>
  );
};

export default Inicio;
