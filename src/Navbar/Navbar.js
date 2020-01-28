import React from 'react';
import styled from 'styled-components';
import { blueguer } from "../Styles/Colors";
import { Title } from "../Styles/Title";
import { Nav, Navbar, NavDropdown, Form, FormControl, Button } from 'react-bootstrap/';


const NavbarStyled = styled.div`
    background-color: ${blueguer};
    padding: 10px;
    position: fixed;
    width: 100%;
    z-index: 999;
`;


const Logo = styled(Title)`
    font-size:30px;
    color: black;
    text-shadow: 1px 1px 4px white;
    `;

export function NavBar() {
    return (
        <Navbar bg="light" expand="lg" fixed='top'>
            <Navbar.Brand href="#home">
                <Logo>Patagonia XL
                    <span role="img" aria-label="Hamburguer">🍔</span>
                </Logo>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                </Nav>

                <Button variant="outline-primary">Login</Button>

            </Navbar.Collapse>
        </Navbar>
    )
       

}