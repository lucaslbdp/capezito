import React from 'react';
import "./porcentaje.css";

const Porcentaje = () => {
    return (
        <section className="container-section">
            <div className="contenedor">
                <div className="progreso pro-1">
                    <div className="circle circle1">
                    </div>
                    <h2>60%</h2>
                    <h3 style={{color:'white', textTransform:"capitalize"}}>seguridad</h3>
                </div>
            </div>
            <div className="contenedor">
                <div className="progreso pro-2">
                    <div className="circle circle2">
                    </div>
                    <h2>25%</h2>
                    <h3 style={{color:'white', textTransform:"capitalize"}}>tiempo</h3>
                </div>
            </div>
            <div className="contenedor">
                <div className="progreso pro-3">
                    <div className="circle circle3  ">
                    </div>
                    <h2>95%</h2>
                    <h3 style={{color:'white', textTransform:"capitalize"}}>Efecicasia</h3>
                </div>
            </div>
        </section>


    );
};

export default Porcentaje;