import React from "react";
import "./Carrusel.css";
import ReactPlayer from 'react-player';
import Video from '../videos/videoCapez.mp4'

const Nosotros = () => {

  return (
      <div className='player-wrapper'>
        <ReactPlayer
          className='react-player'
          width="100%"
          height="78%"
          controls={true}
          playing={true}
          loop
          volume="0.9"
          muted
          allow='autoplay; encrypted-media'
          url={Video}
        />
      </div>
  );
};

export default Nosotros;
