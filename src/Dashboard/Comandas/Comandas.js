import React from 'react';
import {Card, Button} from 'react-bootstrap';
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
                                <Card.Title>Pedido: N° de comanda  </Card.Title>
                                <Card.Text>
                                   <p>Nombre: </p>
                                   <p>Apellido: </p>
                                   <p>Direccion: </p>
                                   <p>Telefono: </p>
                                   <p>Tipo de pago: </p>
                                   <p>pedido: </p>
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <div>
                                <Button variant="outline-light">En proceso</Button>{' '}
                                <Button variant="outline-light">Listo!</Button>{' '}
                                </div>
                            </Card.Footer>
                        </Card>
                        <Card bg="warning" text="white" style={{ width: '18rem' }}>
                            <Card.Header>Detalle de comanda</Card.Header>                          
                            <Card.Body>
                                <Card.Title>Pedido: N° de comanda  </Card.Title>
                                <Card.Text>
                                   <p>Nombre: </p>
                                   <p>Apellido: </p>
                                   <p>Direccion: </p>
                                   <p>Telefono: </p>
                                   <p>Tipo de pago: </p>
                                   <p>pedido: </p>
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <div>
                                <Button variant="outline-light">En proceso</Button>{' '}
                                <Button variant="outline-light">Listo!</Button>{' '}
                                </div>
                            </Card.Footer>
                        </Card>
                        <Card bg="danger" text="white" style={{ width: '18rem' }}>
                            <Card.Header>Detalle de comanda</Card.Header>                          
                            <Card.Body>
                                <Card.Title>Pedido: N° de comanda  </Card.Title>
                                <Card.Text>
                                   <p>Nombre: </p>
                                   <p>Apellido: </p>
                                   <p>Direccion: </p>
                                   <p>Telefono: </p>
                                   <p>Tipo de pago: </p>
                                   <p>pedido: </p>
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <div>
                                <Button variant="outline-light">En proceso</Button>{' '}
                                <Button variant="outline-light">Listo!</Button>{' '}
                                </div>
                            </Card.Footer>
                        </Card>
                        <Card bg="success" text="white" style={{ width: '18rem' }}>
                            <Card.Header>Detalle de comanda</Card.Header>                          
                            <Card.Body>
                                <Card.Title>Pedido: N° de comanda  </Card.Title>
                                <Card.Text>
                                   <p>Nombre: </p>
                                   <p>Apellido: </p>
                                   <p>Direccion: </p>
                                   <p>Telefono: </p>
                                   <p>Tipo de pago: </p>
                                   <p>pedido: </p>
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <div>
                                <Button variant="outline-light">En proceso</Button>{' '}
                                <Button variant="outline-light">Listo!</Button>{' '}
                                </div>
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
