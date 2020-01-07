import React from 'react';
import styled from 'styled-components';
import { blueguer } from "../Styles/Colors";
import { Title } from "../Styles/Title";

const NavbarStyled = styled.div`
    background-color: ${blueguer};
    padding: 10px;
    position: fixed;
    width: 100%;

`
const Logo = styled(Title)`
    font-size:30px;
    color: black;
    text-shadow: 1px 1px 4px white;
    `


export function Navbar() {
    return <NavbarStyled>
        <Logo>Patagonia XL
            <span role="img" aria-label="Hamburguer">
            🍔
            </span>
        </Logo>
    </NavbarStyled>
}