import React from 'react'
import styled from 'styled-components';
import './Banner.css';
import { Title } from '../Styles/Title';

const BannerStyled = styled(Title)`
    Font-size: 30px;
`;

export const Banner = () => {
    return(
        <BannerStyled>
        <div className="jumbotron jumbotron-fluid bg-dark">
            <div className="jumbotron-background">
                <img src={require('./Banner.jpg')} className="blur " alt="Servicios Escort"/>
            </div>

            <div className="container text-white">
                <div className="lead">Sandwich, Pichangas, Completos y más</div>
                <hr className="my-4" />
                <p>Ahora con sistema de Pago en Línea <br/>Siguenos en Facebook!</p>
                <div className="btn fb-color" role="button">Patagonia XL</div>
            </div>
        </div>
        </BannerStyled>
    )
}