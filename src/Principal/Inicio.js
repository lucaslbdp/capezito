import React from "react";
import Carousel from "../otros/carousel";
import Jumbo from "../otros/jumbo";
import ".././App.css";
import Multimedia from "../otros/multimedia";
import Articles from "../components/articles";
import Contacto from "../otros/contact";
import PodemosAyudarte from "../components/podemosAyudarte";
import Clients from "../otros/clients"

const Inicio = () => {
  return (
    <div>
      <Carousel />
      <PodemosAyudarte />
      <Jumbo />
      <Articles />
      <Multimedia />
      <Contacto />
      <Clients />
    </div>
  );
};

export default Inicio;
