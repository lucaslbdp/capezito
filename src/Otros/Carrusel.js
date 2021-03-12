import React from "react";
import { Container } from "react-bootstrap";
import "./Carrusel.css";
import ReactPlayer from 'react-player';
import Video from '../videos/videoCapez.mp4'

const Nosotros = () => {

  return (
    <Container>
      <div className='player-wrapper'>
        <ReactPlayer
          className='react-player'
          width="100%"
          height="100%"
          controls={true}
          playing={true}
          loop
          volume="0.90"
          muted
          allow='autoplay; encrypted-media'
          url={Video}
          controlslist="nodownload"
        />
      </div></Container>
  );
};

export default Nosotros;
