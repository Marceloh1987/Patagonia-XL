import React from 'react';
import * as mo from 'mercadopago';
import styled from 'styled-components';
import { Title } from '../Styles/Title';
import { NavBar } from '../Navbar/Navbar';
import { Banner } from '../Banner/Banner';
import { Footer } from '../Footer/Footer';
import { Jumbotron, Card } from 'react-bootstrap';

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
        background-color: #28a745;
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

export function ExitoDialog(props){
    const result = props.location.search.split('?')[1];
    const success_data = result.split('&');
    let data = {};
    success_data.map((value, i) => {
        data[value.split('=')[0]] = value.split('=')[1]
        
    })
    
    if(data){

        console.log(data)
        return(
            <>
            <Banner/>
            <JumboContainer>
                <Jumbotron fluid>
                    <Card className="text-center">
                        <Card.Header>Estado Del Pago:</Card.Header>
                        <Card.Body>
                            <Card.Title></Card.Title>
                            <Card.Text>
                                Tu pago fue realizado con exito.
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
    else{
        return(
            <h1>Loading...</h1>
        )
    }
    
}