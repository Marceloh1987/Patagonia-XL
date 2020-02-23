import React, {useEffect, useState} from 'react';
import {Modal, Button, Form} from 'react-bootstrap';
import * as MP from 'mercadopago';
import credentials from './credentials.json';

const Pago = (props) => {
    // const orders = props.location.query.orders;

    console.log(props);
    const [mpData, setMpData] = useState(null);


    const config = () =>{
        MP.configure({
            sandbox:true,
            access_token: credentials.access_token
        });
        MP.configurations.setAccessToken(credentials.access_token);
    }
    

    return(
        <Modal {...props}>
            <Modal.Header closeButton>
                <Modal.Title>¿Esta bien su orden?</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>

                </Form>
            </Modal.Body>
        </Modal>
    )
}

export default Pago;
