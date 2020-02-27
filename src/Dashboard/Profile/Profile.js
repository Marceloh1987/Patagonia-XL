import React from 'react';
import { Form, Col, Button } from 'react-bootstrap';
import styled from 'styled-components';

const Profile = (props) => {
    return(
        <Formulario>
            <Form>
                <Form.Row>
                    <Form.Group as={Col} controlId="formGridName">
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control type="Name" placeholder="Nombre..." />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridLastName">
                        <Form.Label>Apellido</Form.Label>
                        <Form.Control type="LastName" placeholder="Apellido..." />
                    </Form.Group>
                    </Form.Row>
                    <Form.Row>
                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="Email" placeholder="Email..." />
                    </Form.Group>

                        <Form.Group as={Col} controlId="formGridPhone">
                        <Form.Label>Telefono</Form.Label>
                        <Form.Control type="Phone" placeholder="+56 9..." />
                    </Form.Group>
                    </Form.Row>

                    <Form.Row>
                    <Form.Group as={Col} controlId="formGridAddress">
                        <Form.Label>Direccion</Form.Label>
                        <Form.Control type="Address" placeholder="Direccion..."/>
                    </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group controlId="formGridTextBox">
                            <Form.Label>Comentarios:</Form.Label>
                            <Form.Control as="textarea" rows="10" Cols="110" />
                        </Form.Group>
                    </Form.Row>

                <Button variant="primary" type="submit">
                    Enviar
                </Button>
            </Form>
        </Formulario>    
    )
}

export default Profile;

const Formulario = styled.div`
   background: #ffffff;
    box-shadow: 0px 2px 12px #3333338a;
    min-width: 600px;
    border-radius: 15px;
    margin: 15%;
    padding: 2rem 2rem 2rem 2rem;

`;

