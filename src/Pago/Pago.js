import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import {Modal, Button, Form, Spinner, Col} from 'react-bootstrap';
import firebase from '../Firebase/firebase';
import MercadoPago from './MercadoPago';



const Pago = (props) => {
    // const orders = props.location.query.orders;
    const [checked, setChecked] = useState(false);
    const [userData, setUserData] = useState(null);
    const [showMP, setShowMP] = useState(false);

    
    const handleFormSubmit = (e) => {
        e.preventDefault();
        const { direccion, comentario} = e.target.elements;
        if(direccion && comentario){
            console.log('Info Usuario: ',direccion.value, comentario.value);
        }
        else{
            setShowMP(true);
            props.onHide();
        }
    };
    
    const handleChecked = () => {
        setChecked(!checked);
    }

    useEffect(() =>{
        firebase.database().ref(`/Users/${props.uid}`).on('value', (snapshot) => {
            setUserData(snapshot.val());
        });
        
    }, [])
 

    return(
        <>
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
        {
            userData && props.orders.length > 0 ? <MercadoPago show={showMP} onHide={() => setShowMP(false)} user={userData} order={props.orders}/> : null
        }
        </>
    )
}


export default Pago;
