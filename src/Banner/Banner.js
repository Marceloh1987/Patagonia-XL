import React from 'react'
import styled from 'styled-components';
import './Banner.css';
import { Title } from '../Styles/Title';

const BannerStyled = styled(Title)`
    Font-size: 20px;
`;

export const Banner = () => {
    return(
        <BannerStyled>
        <div className="jumbotron jumbotron-fluid">
  <div className="container">
      <div className="bg-text">
        <h1>Ahora Menú y Pago en Línea </h1>
        <p className="lead">Pichangas, Sandwich, Completos y más!<br/><br/> Siguenos en Facebook!</p>
        <button className="btn btn-primary">Patagonia XL</button>
      </div>
  </div>
</div>
            
        </BannerStyled>
    )
}