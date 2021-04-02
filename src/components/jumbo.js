import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import "../App.css";
import capezGris from "../img/capezGris.png";
import "./jumbo.css";

const Jumbo = () => {
    return (
        <Jumbotron
            className="mt-5 text-center shadow-sm mb-0 pt-0 col-sm-12"
            style={{ backgroundImage: "url(./back.png)", width: "100%" }}
            >
            <img src={capezGris} className="pb-0 mb-0" alt="logo capez"></img>
            <h2
                className="mb-3 jumbo-titulo"
            >
                <strong>Nosotros</strong>
            </h2>
            <p style={{ color: "white" }} className="mb-4 jumbo-parrafo">
                Somos una empresa tucumana que llega para brindar la mejor calidad{" "}
                <br></br>en comunicación a través de un servicio automático y
                personalizado a la vez,<br></br> dejando resultados reales y eficaces.
      </p>
        </Jumbotron>
    );
};

export default Jumbo;
