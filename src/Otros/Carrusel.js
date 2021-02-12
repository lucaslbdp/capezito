import React from "react";
import { Container, Row } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import slider2 from "../img/slider2.png";
import "./Carrusel.css";

const Nosotros = () => {
  const images = [slider2, slider2, slider2];

  const carouselItem = () => {
    return images.map((image) => {
      return (
        <Carousel.Item interval={4000}>
          <img
            className="d-block w-80"
            src={image}
            alt="First slide"
            width="100%"
          />
        </Carousel.Item>

      );
    });
  };

  return (
    <Container>
      <Row>
        <div className="pt-5 mt-5">
          <Carousel className="pt-5">{carouselItem()}</Carousel>
        </div></Row></Container>
  );
};

export default Nosotros;
