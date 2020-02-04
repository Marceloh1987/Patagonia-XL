import React from 'react';
import firebase from '../Firebase/firebase';
import { Modal, Button, Form, InputGroup, } from 'react-bootstrap';


const Register = (props) => {

  const onRegisterSubmit = (e) =>{
    e.preventDefault();

    const { name, last_name, email, number, password } = e.target.elements;

    firebase.auth()
            .createUserWithEmailAndPassword(email.value, password.value)
            .then((user) => {
                let uid = user.user.uid;
                firebase.database().ref().child('Users/').push().set({
                    uid:uid,
                    type:'client',
                    nombre:name.value,
                    apellido:last_name.value,
                    numero:`+56 ${number.value}`,
                    email:email.value,
                    password:password.value,
                    direccion: '',
                    comentario: '',

                })
              })
                .catch((error) => {
                  console.log(error);
                });
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
                  <Button style={{margin:'0 0 0 15px'}} variant="danger" onClick={props.onHide}>
                    Salir
                  </Button>
                </Form>
            </Modal.Body>
          </Modal>
        </>
      );
}

export default Register;