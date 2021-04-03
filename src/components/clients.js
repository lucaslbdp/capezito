import React, { useEffect } from 'react';
import { MDBJumbotron } from "mdbreact";
import "./clients.css"

const Clientes = () => {

    useEffect(() => {

        const contadores = document.querySelectorAll('.contador_cantidad')
        const velocidad = 10000

        const animarContadores = () => {
            for (const contador of contadores) {
                const actualizar_contador = () => {
                    let cantidad_maxima = +contador.dataset.cantidadTotal;
                    let valor_actual = +contador.innerText;
                    let incremento = cantidad_maxima / velocidad;

                    if (valor_actual < cantidad_maxima) {
                        contador.innerText = Math.ceil(valor_actual + incremento)
                        setTimeout(actualizar_contador,100);
                    } else {
                        contador.innerText = cantidad_maxima;
                    }
                }
                actualizar_contador();
            }

        }

        const mostrarContadores = elementos => {
            elementos.forEach(elemento => {
                if (elemento.isIntersecting) {
                    elemento.target.classList.add('animar')
                    elemento.target.classList.remove('ocultar')
                    setTimeout(animarContadores, 500)
                }
            });
        }

        const observer = new IntersectionObserver(mostrarContadores, {
            threshold: 1
        })

        const elementosHTML = document.querySelectorAll('.contador')
        elementosHTML.forEach(elementoHTML => {
            observer.observe(elementoHTML)
        })

    });

    return (
        
        <MDBJumbotron className="mb-0 text-light alinear" style={{background:"#b1d800"}}>
            <div className="contador ocultar col-sm-12 col-md-4">
                <div className="contador_cantidad" data-cantidad-total="4">0</div><h2 className="texto-cliente"><strong>Clientes</strong></h2>
            </div>
            <div className="contador ocultar col-sm-12 col-md-4">
                <div className="contador_cantidad" data-cantidad-total="5">0</div><h2 className="texto-cliente"><strong>Equipos de profesionales</strong></h2>
            </div>
            <div className="contador ocultar col-sm-12 col-md-4">
                <div className="contador_cantidad" data-cantidad-total="60000">0</div><h2 className="texto-cliente"><strong>Contactos<br></br>disponibles</strong></h2>
            </div>
        </MDBJumbotron>
    );
};

export default Clientes;