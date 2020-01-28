import React from 'react';
import styled from 'styled-components';
import { Title } from '../Styles/Title';

const FooterStyled = styled(Title)`
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 75px;
    background-color: #000000;
    color: white;
    text-align: center;
    font-size: 20px;
`;

export function Footer() {
    return (
        <FooterStyled><div id="pagina">
        <div id="cabecera">Patagonia XL</div>
        <div id="contenido"></div>
        <div id="pie">2020 &copy;</div>
      </div></FooterStyled>
    )
}