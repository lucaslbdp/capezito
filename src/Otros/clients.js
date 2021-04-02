import React from 'react';
import { MDBJumbotron } from "mdbreact";
import "./clients.css"

const Clients = () => {
    
    document.addEventListener('DOMContentLoaded', () => {
        const counters = document.querySelectorAll('.quantity_counter')
        const speed  = 1000

        const animateCounters = () => {
            for (const contador of counters) {
                const updateCounter = () => {
                    let maxQuantity = +contador.dataset.quantityTotal;
                    let currentValue = +contador.innerText;
                    let increase = maxQuantity / speed ;

                    if (currentValue < maxQuantity) {
                        contador.innerText = Math.ceil(currentValue + increase)
                        setTimeout(updateCounter,130)
                    } else {
                        contador.innerText = maxQuantity
                    }
                }
                updateCounter()
            }

        }

        const showCounters = elementos => {
            elementos.forEach(elemento => {
                if (elemento.isIntersecting) {
                    elemento.target.classList.add('animar')
                    elemento.target.classList.remove('ocultar')
                    setTimeout(animateCounters, 250)
                }
            });
        }

        const observer = new IntersectionObserver(showCounters, {
            threshold: 1
        })

        const elementosHTML = document.querySelectorAll('.contador')
        elementosHTML.forEach(elementoHTML => {
            observer.observe(elementoHTML)
        })

    })

    return (
        
        <MDBJumbotron className="mt-5 mb-0 success-color text-light alinear">
            <div className="contador ocultar col-sm-12 col-md-3">
                <div className="quantity_counter" data-quantity-total="38">
                    0
                    </div><h2 className="texto-cliente">Clientes</h2>
            </div>
            <div className="contador ocultar col-sm-12 col-md-3">
                <div className="quantity_counter" data-quantity-total="2">0</div><h2 className="texto-cliente">Años en el mercado</h2>
            </div>
            <div className="contador ocultar col-sm-12 col-md-3">
                <div className="quantity_counter" data-quantity-total="7">0</div><h2 className="texto-cliente">Propuestas disponibles</h2>
            </div>
            <div className="contador ocultar col-sm-12 col-md-3">
                <div className="quantity_counter" data-quantity-total="100">0</div>
                <h2 className="texto-cliente">Efectividad garantizada</h2>
            </div>
        </MDBJumbotron>
    );
};

export default Clients;