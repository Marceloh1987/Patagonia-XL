import React from 'react';
import {Card} from 'react-bootstrap';
import ComandaStyles from "../MainContainer.module.scss";

const Comandas = () => {
    return (
       <div className={ComandaStyles.container}>
            <div className={ComandaStyles.wrapper}>
                <div style={{ position: "relative" }}>
                    <h1>Comandas!</h1>
                    <div className={ComandaStyles.Cards}>
                        <Card bg="primary" text="white" style={{ width: '18rem' }}>
                            <Card.Header>Sandwich: Patagon</Card.Header>
                            <Card.Body>
                                <Card.Title>Primary Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk
                                    of the card's content.
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <button>En proceso</button>
                                <button>Listo!</button>
                            </Card.Footer>
                        </Card>
                        <Card bg="success" text="white" style={{ width: '18rem' }}>
                            <Card.Header>Header</Card.Header>
                            <Card.Body>
                                <Card.Title>Primary Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk
                                    of the card's content.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card bg="warning" text="white" style={{ width: '18rem' }}>
                            <Card.Header>Header</Card.Header>
                            <Card.Body>
                                <Card.Title>Primary Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk
                                    of the card's content.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card bg="danger" text="white" style={{ width: '18rem' }}>
                            <Card.Header>Header</Card.Header>
                            <Card.Body>
                                <Card.Title>Primary Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk
                                    of the card's content.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Comandas;