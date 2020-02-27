import React, {useEffect, useState} from 'react';
import {Modal, Button, Form, Spinner, Col} from 'react-bootstrap';
import firebase from '../Firebase/firebase';
import * as MP from 'mercadopago';
import credentials from './credentials.json';
import { findByAltText } from '@testing-library/react';

const Pago = (props) => {
    // const orders = props.location.query.orders;
    console.log(props);
    const [mpData, setMpData] = useState(null);
    const [checked, setChecked] = useState(false);
    const [spinner, setSpinner] = useState(false);
    const [userData, setUserData] = useState(null);


    const config = () =>{
        MP.configure({
            sandbox:true,
            access_token: credentials.access_token
        });
        MP.configurations.setAccessToken(credentials.access_token);
    };
    
    const handleFormSubmit = (e) => {
        e.preventDefault();

        const { direccion, comentario} = e.target.elements;

        console.log('Info Usuario: ',direccion.value, comentario.value);
        console.log('Orden: ', props.orders);
    };
    
    const handleChecked = () => {
        setChecked(!checked);
    }
    const handleDelivery = () =>{
        setSpinner(true);
        firebase.database().ref(`/Users/${props.uid}`).on('value', (snapshot) => {
            setUserData(snapshot.val());
            setSpinner(false);
            console.log(snapshot.val())
        });
    }

    return(
        <Modal {...props}>
            <Modal.Header closeButton>
                <Modal.Title>¿Desea servicio de entrega?</Modal.Title>
            </Modal.Header>
            <Form onSubmit={handleFormSubmit}>
                <Modal.Body>
                    <div style={{textAlign:'center'}}>
                        <Form.Check className='form-check-inline'
                            checked={checked}
                            name={'control'}
                            type={'radio'}
                            id={`custom`}
                            label={'Si, por favor!'}
                            onChange={() => {
                                handleChecked();
                                handleDelivery();
                                }
                             }
                        />
                        <Form.Check className='form-check-inline'
                            checked={!checked}
                            name={'control'}
                            type={'radio'}
                            id={`custom`}
                            label={`No gracias, retiraré en el local de Patagonia XL. (Martinez de Aldunate #1632)`}
                            onChange={
                                handleChecked
                            }
                        />
                    </div>
                    <br/>
                    {spinner ? (<Spinner style={{marginLeft:'47%'}} as="span" animation="border" size="sm" role="status" aria-hidden="true" />) : null}
                    {checked === true && userData ? (
                        <>
                        {userData.direccion === '' ? <h5>Complete sus datos de Contacto</h5> : <h5>¿Su información es correcta?</h5>}
                        <Form.Row>
                            <Col>
                                <Form.Group>
                                    <Form.Label>Nombre:</Form.Label>
                                    <Form.Control readOnly type="text" value={userData.nombre} name="name" />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group>
                                    <Form.Label>Apellido:</Form.Label>
                                    <Form.Control readOnly type="text" value={userData.apellido} name="last_name" />
                                </Form.Group>
                            </Col>
                        </Form.Row>
                        <Form.Row>
                            <Col>
                                <Form.Group>
                                    <Form.Label>Teléfono:</Form.Label>
                                    <Form.Control readOnly type='text' value={userData.numero} name='number' required/>
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group>
                                    <Form.Label>Dirección:</Form.Label>
                                    <Form.Control type='text' name='direccion' required />
                                </Form.Group>
                            </Col>
                        </Form.Row>
                        <Form.Group>
                            <Form.Label>Indicaciones:</Form.Label>
                            <Form.Control as='textarea' rows='3' name='comentario' />
                        </Form.Group>
                        </>
                    )
                    : null}
                </Modal.Body>
                <Modal.Footer>
                    <Button type='submit' block>Ir a Pagar</Button>
                </Modal.Footer>
            </Form>
        </Modal>
    )
}

export default Pago;
