import React from 'react';
import styled from 'styled-components';

const FooterStyled = styled.div`
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 60px;
    background-color: #000000;
`;

export function Footer() {
    return (
        <FooterStyled>...</FooterStyled>
    )
}