import React from "react";
import { Container, Row } from "react-bootstrap";
import "./Carrusel.css";
import ReactPlayer from 'react-player';
import Video from '../videos/Video de Alejandro.mp4'

const Nosotros = () => {

    return (
        <div id="section1" className='player-wrapper'>

            <ReactPlayer
                className='react-player'
                width="100%"
                height="100%"
                controls={true}
                playing={true}
                loop
                muted
                allow='autoplay; encrypted-media'
                url={Video}
            />
        </div>
    );
};

export default Nosotros;
