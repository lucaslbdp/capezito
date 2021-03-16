import React from 'react';
import { MDBJumbotron } from "mdbreact";
import "./Clientes.css"

const Clientes = () => {
    document.addEventListener('DOMContentLoaded', () => {
        const contadores = document.querySelectorAll('.contador_cantidad')
        const velocidad = 2000000

        const animarContadores = () => {
            for (const contador of contadores) {
                const actualizar_contador = () => {
                    let cantidad_maxima = +contador.dataset.cantidadTotal,
                        valor_actual = +contador.innerText,
                        incremento = cantidad_maxima / velocidad

                    if (valor_actual < cantidad_maxima) {
                        contador.innerText = Math.ceil(valor_actual + incremento)
                        setTimeout(actualizar_contador,180)
                    } else {
                        contador.innerText = cantidad_maxima
                    }
                }
                actualizar_contador()
            }

        }

        const mostrarContadores = elementos => {
            elementos.forEach(elemento => {
                if (elemento.isIntersecting) {
                    elemento.target.classList.add('animar')
                    elemento.target.classList.remove('ocultar')
                    setTimeout(animarContadores, 1000)
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

    })

    return (
        
        <MDBJumbotron className="mb-0 success-color text-light alinear">
            <div className="contador ocultar col-sm-12 col-md-3">
                <div className="contador_cantidad" data-cantidad-total="2">
                  0
                    </div><h2 className="texto-cliente"><strong>Años de<br></br> trayectoria</strong></h2>
            </div>
            <div className="contador ocultar col-sm-12 col-md-3">
                <div className="contador_cantidad" data-cantidad-total="18">0</div><h2 className="texto-cliente"><strong>Clientes</strong></h2>
            </div>
            <div className="contador ocultar col-sm-12 col-md-3">
                <div className="contador_cantidad" data-cantidad-total="5">0</div><h2 className="texto-cliente"><strong>Equipos</strong></h2>
            </div>
            <div className="contador ocultar col-sm-12 col-md-3">
                <div className="contador_cantidad" data-cantidad-total="12">0</div><h2 className="texto-cliente"><strong>Propuestas<br></br> disponibles</strong></h2>
            </div>
        </MDBJumbotron>
    );
};

export default Clientes;