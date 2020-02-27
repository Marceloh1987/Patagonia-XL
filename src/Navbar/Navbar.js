import React, {useState} from 'react';
import styled from 'styled-components';
import { Title } from "../Styles/Title";
import { Nav, Navbar, Button, ButtonToolbar, Dropdown } from 'react-bootstrap/';
import {LogOut} from '../Firebase/firebase';
import Register from '../Register/Register';
import Login from '../Login/Login';

const Logo = styled(Title)`
    font-size:30px;
    color: black;
    text-shadow: 1px 1px 4px white;
    `;

export function NavBar(props) {
    console.log(props)
    const [modalRegisterShow, setModalRegisterShow] = useState(false);
    const [modalLoginShow, setModalLoginShow] = useState(false);

    return (
        <Navbar bg="light" expand="lg" fixed='top'>
            <Navbar.Brand href="/">
                <Logo>Patagonia XL
                    <span role="img" aria-label="Hamburguer">🍔</span>
                </Logo>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />

            {props.authenticated ? 
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto" /> 

                    <Dropdown>
                        <Dropdown.Toggle variant="primary" id="dropdown-basic">
                            Bienvenido(a) {props.name}
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item href={`/dashboard/${props.uid}`}>Perfil</Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item onClick={() => LogOut()}>Salir</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Navbar.Collapse>
                :
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto" />
                    <ButtonToolbar  >
                        <Button variant="outline-success" onClick={() => setModalRegisterShow(true)}>Registarse</Button>
                        <Button style={{margin: '0 0 0 10px'}} variant="outline-primary" onClick={() => {setModalLoginShow(true)}}>Login</Button>
                    </ButtonToolbar>

                </Navbar.Collapse>
            }
            <Register show={modalRegisterShow} onHide={() => setModalRegisterShow(false)} />
            <Login show={modalLoginShow} onHide={() => {setModalLoginShow(false)}} />
        </Navbar>
    )


}
