import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import {Modal, Button} from 'react-bootstrap';
import * as MP from 'mercadopago'
import credentials from './credentials.json';


const MercadoPago = (props) => {
    const [mpData, setMpData] = useState('');

    const config = () =>{
        MP.configure({
            sandbox:true,
            access_token: credentials.access_token
        });
        MP.configurations.setAccessToken(credentials.access_token);
    };
    const Items = (order) => {
        const itemPreference = order.map((item) =>{
            return(
                {
                    title: item.nombre,
                    description: item.section,
                    quantity: item.quantity,
                    currency_id: 'CLP',
                    unit_price: item.precio,
                }
            )
        })
        return itemPreference;
    }
    const creatingPreferences = (order, user) => {
        console.log('order: ',order);
        console.log('user: ', user);
        let items = Items(order);
        console.log('items: ',items)
        const preferences = {
            items: items,
            payer: {
                name: user.nombre,
                surname: user.apellido,
                email: user.email
            },
            back_urls: {
                success: 'http://localhost:3000/pago/exito',
                pending: 'http://localhost:3000/pago/Espera',
                failure: 'http://localhost:3000/pago/Fallo'
            },
            payment_methods: {
                excluded_payment_types: [
                    {
                        id: "ticket"
                    },
                ]
            }
        }
        return preferences;
    }

    const payURL = () =>{
        return (
            <Link to={mpData} />
        )
    }

    useEffect(() =>{
        config();
        let preferences = creatingPreferences(props.order, props.user);

        MP.preferences.create(preferences).then((data) =>{
            console.log(data);
            setMpData(data.body.init_point)
        }).catch((err) => {
            console.log(err);
        })
    }, []);

    return (
        <>
        <Modal {...props}>
            <Modal.Header closeButton>
                <Modal.Title>Atención!</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>blab la bla bla</p>
            </Modal.Body>
            <Modal.Footer>
                <a href={mpData}>
                    <Button>Ok!</Button>
                </a>
            </Modal.Footer>
        </Modal>
        </>
    )
}

export default MercadoPago;