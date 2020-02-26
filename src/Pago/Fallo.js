import React from 'react';
import styled from 'styled-components';
import { Title } from '../Styles/Title';
import { NavBar } from '../Navbar/Navbar';
import { Banner } from '../Banner/Banner';
import { Footer } from '../Footer/Footer';
import { Spinner, Jumbotron, Card } from 'react-bootstrap';

const JumboContainer = styled(Title)`
    
    .jumbotron {
        padding-top: 0;
    }

    .card {
        margin-top: -40px;
        margin-bottom: -40px;
        margin-left: 30%;
        margin-right: 30%;
        border: none;
    }

    .card-header {
        color: #ffffff;
        font-size: 20px;
        background-color: #007bff;
        margin-top: 0%;
    }

    .card-body {
        color: #000000;
        font-size: 25px;
    }

    .card-footer {
        color: #ffffff;
        background-color: #007bff;
    }    

`;

export function FalloDialog(){
    return(
        <>
        <NavBar/>
        <Banner/>
        <JumboContainer>
            <Jumbotron fluid>
                <Card className="text-center">
                    <Card.Header>Estado Del Pago:</Card.Header>
                    <Card.Body>
                        <Card.Title></Card.Title>
                        <Card.Text>
                            Tu pago a sido rechazado.
                            <br/>  
                        </Card.Text>                                        
                    </Card.Body>
                </Card>   
            </Jumbotron>
        </JumboContainer>
        <Footer/>
        </>

    );
}