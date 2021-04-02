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
    <footer className="elegant-color text-light mt-0">
      <Container>
        <Row>
          <div className="col-sm-12 col-md-4 mt-4 logo-footer">
            <img src={logoFooter2} alt="logo empresa"></img>
            <p className="mt-4">2021 &copy; Todos los derechos reservados - CAPEZ</p>
            <p>Tucumán - Argentina.</p>
            <p>Diseñado por Guillou Brands</p>
            <p>Desarrollado por Lucas Barrionuevo</p>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-4 ml-auto">
            <div className="">
              <a style={{ color: "black" }}
                target="_blank noreferrer"
                href="https://api.whatsapp.com/send?phone=+5493815516016"
              >
                <img src={contactar} alt="img contactar" className="boton-footer"></img></a>
              <div className="ml-4 red-footer">
                            <p className="mt-3 parrafo-seguinos">Seguinos en nuestras redes:</p>
                <div className="seguinos-footer">
                  <a
                    target="_blank noreferrer"
                    href="https://www.facebook.com/capezcomunicacion"
                  >

                    <img src={facebookIcon} alt="icono fb" className="ml-3 icono-footer"></img></a>
                  <a
                    target="_blank noreferrer"
                    href="https://www.instagram.com/capezcomunicacion/"
                  >
                    <img src={instagramIcon} alt="icono ig" className="ml-2 icono-footer"></img></a>
                  <a style={{ color: "black" }}
                    target="_blank noreferrer"
                    href="https://api.whatsapp.com/send?phone=+5493815516016"
                  >
                    <img src={whatsappIcon} alt="icono wp" className="ml-2 icono-footer"></img></a>
                    
                </div>
                </div>
            </div></div>
        </Row>
      </Container>

      <hr style={{ width: "90%" }}></hr>
    </footer>
  );
};

export default Footer;
