import React from 'react'
import './Banner.css';

export const Banner = () => {
    return(
        <div className="jumbotron jumbotron-fluid bg-dark">
            <div className="jumbotron-background">
                <img src={require('./Banner.jpg')} className="blur " alt="Servicios Escort"/>
            </div>

            <div className="container text-white">
                <p className="lead">Sandwich, Pichangas, Completos y más</p>
                <hr className="my-4" />
                <p>Ahora con sistema de Pago en Línea <br/>Siguenos en Facebook!</p>
                <div className="btn fb-color" role="button">Patagonia XL</div>
            </div>
        </div>
    )
}