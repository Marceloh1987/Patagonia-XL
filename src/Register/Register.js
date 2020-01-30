import React from 'react';
import { Modal, Button, Form, InputGroup, } from 'react-bootstrap';


const Register = (props) => {

    return (
        <>
          <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
            <Modal.Header closeButton>
              <Modal.Title>Ingrese sus datos para registrarse</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group>
                        <Form.Label>Nombre(s)</Form.Label>
                        <Form.Control type='text' placeholder='Ingrese su nombre'></Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Apellido(s)</Form.Label>
                        <Form.Control type='text' placeholder='Ingrese su Apellido'></Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>E-mail</Form.Label>
                        <Form.Control type="email" placeholder="Ingrese su e-mail" />
                        <Form.Text className="text-muted">
                        Nunca compartiremos su e-mail con nadie más.
                        </Form.Text>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Celular</Form.Label>
                        <InputGroup>
                            <InputGroup.Prepend>
                                <InputGroup.Text>+56</InputGroup.Text>
                            </InputGroup.Prepend>
                            <Form.Control type='text' placeholder='Ingrese su Nro. telefónico'></Form.Control>
                        </InputGroup>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Contraseña</Form.Label>
                        <Form.Control type="password" placeholder="Contraseña" />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="primary">
                Registrarse
              </Button>
              <Button variant="secondary">
                Salir
              </Button>
            </Modal.Footer>
          </Modal>
        </>
      );
}

export default Register;