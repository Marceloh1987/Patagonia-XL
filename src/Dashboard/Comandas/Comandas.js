import React from 'react';
import {Card} from 'react-bootstrap';
import ComandaStyles from "../MainContainer.module.scss";
import { Order } from '../../Order/Order';

const Comandas = () => {

    return (
       <div className={ComandaStyles.container}>
            <div className={ComandaStyles.wrapper}>
                <div style={{ position: "relative" }}>
                    <h1>Comandas!</h1>
                    <div className={ComandaStyles.Cards}>
                        <Card bg="primary" text="white" style={{ width: '18rem' }}>
                            <Card.Header>Detalle de comanda</Card.Header>                          
                            <Card.Body>
                                <Card.Title>Pedido: </Card.Title>
                                <Card.Text>
                                   <p>Nombre: </p>
                                   <p>Apellido: </p>
                                   <p>Direccion: </p>
                                   <p>Telefono: </p>
                                   <p>Tipo de pago: </p>
                                   <p></p>
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <button>En proceso</button>
                                <button>Listo!</button>
                            </Card.Footer>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Comandas;

console.log();
