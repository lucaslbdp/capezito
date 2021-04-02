import React from "react";
import Carousel from "../../components/carousel/carousel";
import Jumbo from "../../components/jumbo";
import "../../App";
import Multimedia from "../../components/multimedia";
import Articles from "../../components/articles/articles";
import Contacto from "../../components/contact";
import Help from "../../components/help/help";
import Clients from "../../components/clients"

const Inicio = () => {
  return (
    <div>
      <Carousel />
      <Help />
      <Jumbo />
      <Articles />
      <Multimedia />
      <Contacto />
      <Clients />
    </div>
  );
};

export default Inicio;
