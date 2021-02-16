import React from 'react';
import chatbot from "../img/chatbot.png";
import branding from "../img/branding.png";
import web from "../img/web.png";
import "./Articles.css";
import { MDBAnimation } from "mdbreact";

const Articles = () => {
    return (

            <div className="article-container text-center gris">
                <div className="col-sm-12 col-md-12 col-lg-4">
                <MDBAnimation reveal type="slideInLeft" duration="2s">
                <img src={chatbot} alt="img chatbot" width="35%"></img></MDBAnimation>
                <h3 style={{textTransform:"initial", fontSize:"25px", letterSpacing:"0em"}} className="mt-2"><strong>Chatbot <br></br>personalizado</strong></h3>
                <p style={{fontSize: "17px", color: "#9a9a9a" }} className="mt-4">Daremos vida a tus redes sociales,<br></br>planificaremos una conversación <br></br>exitosa con tu cliente, dando la mayor <br></br>información sobre tu negocio.</p>
                </div>
                <div className="col-sm-12 col-md-12 col-lg-4">
                <MDBAnimation reveal type="fadeIn" duration="2s">
                    <img src={branding} alt="img branding" width="35%"></img></MDBAnimation>
                    <h3 style={{textTransform:"initial", fontSize:"25px", letterSpacing:"0em" }} className="mt-3"><strong>Branding y diseño <br></br>de marca</strong></h3>
                    <p style={{fontSize: "17px", color: "#9a9a9a" }} className="mt-3">Construiremos o renovaremos tu marca <br></br> de manera profesional, coherente y <br></br> adecuado a los últimos estándares.</p>
                </div>
                <div className="col-sm-12 col-md-12 col-lg-4">
                <MDBAnimation reveal type="slideInRight" duration="2s">
                    <img src={web} alt="img web" width="35%"></img></MDBAnimation>
                <h3 style={{textTransform:"initial", fontSize:"25px", letterSpacing:"0em"}} className="mt-2"><strong>Desarrollo<br></br>web</strong></h3>
                <p style={{fontSize: "17px", color: "#9a9a9a" }} className="mt-3">Desarrollaremos la presencia digital <br></br>de tu negocio con una página web <br></br>optimizada para atraer consultas.</p>
                </div>
            </div>
    );
};

export default Articles;

