import React from "react";
import { Container, Row } from "react-bootstrap";
import "./Carrusel.css";
import ReactPlayer from 'react-player';

const Nosotros = () => {

  return (
    <Container>
      <Row>
        <div id="section1" style={{ width: "100%", height: "100%"}}>
          <ReactPlayer playing url={{src:"../videos/videoCapez.mp4", type:"video"}}
            width="100%"
            height="100%">
          </ReactPlayer></div>
      </Row></Container>
  );
};

export default Nosotros;
