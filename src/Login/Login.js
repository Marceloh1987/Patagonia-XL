import React, {useRef, useState} from 'react';
import { Modal, Button, Form, Spinner, Overlay, Tooltip } from 'react-bootstrap';
import firebase from '../Firebase/firebase';

const Login = (props) => {

    const [btnText, setBtnText] = useState(false);
    const [show, setShow] = useState(false);
    const [message, setMessage] = useState('E-mail o password incorrecto.');
    const target = useRef(null);

    const onFormSubmit = (e) =>{
        e.preventDefault();
        setBtnText(true)

        const email = e.target.elements.email.value;
        const psw = e.target.elements.psw.value

        firebase.auth()
            .signInWithEmailAndPassword(email, psw)
            .then((user) => {
                setBtnText(false);
                if(user){
                props.onHide();
                }
            }).catch((error) => {
                if(error.code === "auth/wrong-password"){
                    setBtnText(false);
                    setMessage('E-mail o password incorrecto.');
                    setShow(true);
                    setTimeout(() => setShow(false), 3000);
                }
                else if(error.code === "auth/invalid-email"){
                    setBtnText(false);
                    setMessage('No puede iniciar sesión sin antes ingresar sus credenciales.');
                    setShow(true);
                    setTimeout(() => setShow(false), 3000);
                }
                else if(error.code === 'auth/user-not-found'){
                    setBtnText(false);
                    setMessage('Usuario no encontrado, verifique sus credenciales e intente nuevamente.');
                    setShow(true);
                    setTimeout(() => setShow(false), 3000);
                }
                
            });

    };

    return (
        <>
            <Modal {...props}>
                <Modal.Header closeButton>
                    <Modal.Title>Ingrese sus credenciales para entrar</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={onFormSubmit}>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>E-mail</Form.Label>
                            <Form.Control type="email" placeholder="Su dirección de correo." name="email" />
                            <Form.Text className="text-muted">
                                Ingrese el correo electrónico con el cual se registro.
                            </Form.Text>
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Contraseña</Form.Label>
                            <Form.Control type="password" placeholder="Su contraseña." name="psw"/>
                        </Form.Group>
                        <Button variant="primary" ref={target} name="btnLogin" type="submit" block>
                            {
                                btnText ? <Spinner
                                            as="span"
                                            animation="border"
                                            size="sm"
                                            role="status"
                                            aria-hidden="true"
                                        />
                                        :
                                        'Ingresar'
                            }
                        </Button>
                        <Overlay    target={target.current}
                                    show={show}
                                    placement="bottom"
                                    onHide={() => setShow(false)} rootClose={true}>
                            {props => {
                                return(
                                <Tooltip className="tooltip-error" {...props} show={props.show.toString()}>
                                    {message}
                                </Tooltip>
                                );
                            }}
                        </Overlay>
                    </Form>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default Login;