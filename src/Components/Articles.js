import React from 'react';
import chatbot from "../img/chatbot.png";
import branding from "../img/branding.png";
import web from "../img/web.png";

const Articles = () => {
  return (

    <article className="grey lighten-3">
                <div className="row text-center ml-5">
                    <div className="item col-12 col-md-6 col-lg-3" style={{ fontSize: "2cm", color: "green" }}>
                        <img src={chatbot} alt="icono chat" width="40%"></img>
                        <h3 style={{color:"black", textTransform:"initial", letterSpacing:"0cm"}}><strong>Chatbot <br></br>personalizado</strong></h3>
                        <p style={{ fontSize: "15px", color: "#9a9a9a" }} className="mt-4">Daremos vida a tus redes sociales, planificaremos una conversación exitosa con tu cliente, dando la mayor información sobre tu negocio.</p>
                    </div>
                    <div className="item col-12 col-md-6 col-lg-3" style={{ fontSize: "2cm", color: "green" }}>
                        <img src={branding} alt="icono br" width="40%"></img>
                        <h3 style={{color:"black", textTransform:"initial", letterSpacing:"0cm"}}><strong>Branding y diseño de marca</strong></h3>
                        <p style={{ fontSize: "15px", color: "#9a9a9a" }} className="mt-4">Construiremos o renovaremos tu marca de manera profesional, coherente y adecuado a los últimos estándares.</p>
                    </div>
                    <div className="item col-12 col-md-6 col-lg-3" style={{ fontSize: "2cm", color: "green" }}>
                        <img src={web} alt="icono web" width="40%"></img>
                        <h3 style={{color:"black", textTransform:"initial", letterSpacing:"0cm"}}><strong>Desarrollo<br></br>web</strong></h3>
                        <p style={{ fontSize: "15px", color: "#9a9a9a" }} className="mt-4">Desarrollaremos la presencia digital de tu negocio con una página web optimizada para atraer consultas.</p>
                    </div>
                </div>
            </article>
  );
};

export default Articles;

