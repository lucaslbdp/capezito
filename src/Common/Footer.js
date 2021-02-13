import React from "react";
import { Container, Row } from "react-bootstrap";
import logoFooter2 from "../img/logoFooter2.png";
import contactar from "../img/contactar.png";
import facebookIcon from "../img/facebookIcon.png";
import instagramIcon from "../img/instagramIcon.png";
import whatsappIcon from "../img/whatsappIcon.png";
import "../App.css";

const Footer = () => {
  return (
    <footer className="elegant-color text-light">
      <Container>
        <Row>
          <div className="col-sm-12 col-md-4 mt-4 logo-footer">
            <img src={logoFooter2} alt="logo empresa"></img>
            <p className="mt-4">2021 &copy; Todos los derechos reservados - CAPEZ</p>
            <p>Tucumán - Argentina.</p>
            <p>Diseñado por Guillou Brands</p>
            <p>Desarrollado por Lucas Barrionuevo</p>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-4 ml-auto boton-footer">
          <div className=" ">
            <a style={{ color: "black" }}
              target="_blank noreferrer"
              href="https://api.whatsapp.com/send?phone=+5493815516016"
            >
              <img src={contactar} style={{maxWidth:"300px"}} alt="img contactar"></img></a>
            <div className="ml-4">
              <p className="mt-3" style={{fontSize:"18px"}}>Seguinos en nuestras redes:</p>
              <div className="ml-5 pl-4">
              <a
                target="_blank noreferrer"
                href="https://www.facebook.com/capezcomunicacion"
              >
              <img src={facebookIcon} alt="icono fb" style={{maxWidth:"40px"}} className="ml-5"></img></a>
              <a
                target="_blank noreferrer"
                href="https://www.instagram.com/capezcomunicacion/"
              >
              <img src={instagramIcon} alt="icono ig" style={{maxWidth:"40px"}} className="ml-2"></img></a>
              <a style={{ color: "black" }}
                target="_blank noreferrer"
                href="https://api.whatsapp.com/send?phone=+5493815516016"
              >
              <img src={whatsappIcon} alt="icono wp" style={{maxWidth:"40px"}} className="ml-2"></img></a>
            </div></div>
          </div></div>
          </Row>
          </Container>
        
      <hr style={{ width: "90%" }}></hr>
    </footer>
  );
};

export default Footer;
