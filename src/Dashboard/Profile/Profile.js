import React from 'react';
import { Form, Col, Button } from 'react-bootstrap';
import styled from 'styled-components';
import { Title } from '../Title';

const Profile = (props) => {
    return(
        <Formulario fluid>
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
                            <Form.Control as="textarea" rows="5" Cols="140" />
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

const Formulario = styled(Title)`
    background: #f3f3f3;
    box-shadow: 0px 2px 12px #3333338a;
    border-radius: 15px;
    padding: 2rem 2rem 2rem 2rem;
    margin-top: 1%;
    margin-left: 5%;
    margin-bottom: 5%;    
    height: 100%;


`;

