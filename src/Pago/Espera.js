import React from 'react';
import styled from 'styled-components';
import { Title } from '../Styles/Title';
import { NavBar } from '../Navbar/Navbar';
import { Banner } from '../Banner/Banner';
import { Footer } from '../Footer/Footer';
import { Spinner, Jumbotron, Card, Button } from 'react-bootstrap';

const Espera = styled(Title)`
    font-size: 30px;
    text-align: center;
    margin-top: 0;
    `;

    const CardContainer = styled.div`
    
    .card {
        margin-top: -40px;
        margin-bottom: -40px;
        border: none;
    }

    .card-header {
        color: #ffffff;
        background-color: #007bff;
        margin-top: 0%;
    }

    .card-footer {
        color: #ffffff;
        background-color: #007bff;
    }

`;

export function EsperaDialog(){
    return(
        <>
        <NavBar/>
        <Banner/>
        <Espera>
            <CardContainer>
                <Card className="text-center">
                    <Card.Header>Pago</Card.Header>
                    <Card.Body>
                        <Card.Title></Card.Title>
                        <Card.Text>
                        Tu pago esta siendo procesado
                        </Card.Text>                                        
                    </Card.Body>
                    <Card.Footer className="text-muted">
                        <Spinner animation="border" variant="secondary" />
                        <Spinner animation="border" variant="success" />
                        <Spinner animation="border" variant="danger" />
                        <Spinner animation="border" variant="warning" />
                        <Spinner animation="border" variant="info" />
                        <Spinner animation="border" variant="dark" />
                    </Card.Footer>
                </Card>   
            </CardContainer>             
        </Espera>
        <Jumbotron fluid/>
        <Footer/>
        </>

    );
}