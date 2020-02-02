import React from 'react';
import { Modal, Button, Form, InputGroup, } from 'react-bootstrap';


const Register = (props) => {

  const onRegisterSubmit = (e) =>{
    e.preventDefault();
    const { name, last_name, email, number, password } = e.target.elements;

    console.log(name.value, last_name.value, email.value, number.value, password.value);
  }
    return (
        <>
          <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
            <Modal.Header closeButton>
              <Modal.Title>Ingrese sus datos para registrarse</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={onRegisterSubmit}>
                  <Form.Group>
                      <Form.Label>Nombre(s)</Form.Label>
                      <Form.Control type='text' placeholder='Ingrese su nombre' name='name' required />
                  </Form.Group>
                  <Form.Group>
                      <Form.Label>Apellido(s)</Form.Label>
                      <Form.Control type='text' placeholder='Ingrese su Apellido' name='last_name' required />
                  </Form.Group>
                  <Form.Group>
                      <Form.Label>E-mail</Form.Label>
                      <Form.Control type="email" placeholder="Ingrese su e-mail" name='email' required />
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
                          <Form.Control type='text' placeholder='Ingrese su Nro. telefónico' name='number' />
                      </InputGroup>
                  </Form.Group>
                  <Form.Group>
                      <Form.Label>Contraseña</Form.Label>
                      <Form.Control type="password" placeholder="Contraseña" name='password' required />
                  </Form.Group>
                  <Button variant="primary" type='submit'>
                    Registrarse
                  </Button>
                  <Button variant="danger" onClick={props.onHide}>
                    Salir
                  </Button>
                </Form>
            </Modal.Body>
          </Modal>
        </>
      );
}

export default Register;