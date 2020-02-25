import React, {useEffect, useState} from 'react';
import {Modal, Button, Form, Spinner} from 'react-bootstrap';
import firebase from '../Firebase/firebase';
import * as MP from 'mercadopago';
import credentials from './credentials.json';

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
        if(checked){
            setSpinner(true);
            firebase.database().ref(`/Users/${props.uid}`).on('value', (snapshot) => {
                setUserData(snapshot.val());
                setSpinner(false);
                console.log(snapshot.val())
            });
        }
    };

    const handleChecked = () => {
        setChecked(!checked)
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
                            label={'SI'}
                            onChange={handleChecked}
                        />
                        <Form.Check className='form-check-inline'
                            checked={!checked}
                            name={'control'}
                            type={'radio'}
                            id={`custom`}
                            label={'NO'}
                            onChange={handleChecked}
                        />
                    </div>
                    <br/>
                    {spinner ? (<Spinner style={{marginLeft:'47%'}} as="span" animation="border" size="sm" role="status" aria-hidden="true" />) : null}
                    {checked === true ? <h2>Holiiiii</h2> : null}
                </Modal.Body>
                <Modal.Footer>
                    <Button type='submit'>Ir a Pagar</Button>
                </Modal.Footer>
            </Form>
        </Modal>
    )
}

export default Pago;
