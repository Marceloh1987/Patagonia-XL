import React from 'react';
import styled from 'styled-components';
import { Title } from '../Styles/Title';
import { NavBar } from '../Navbar/Navbar';
import { Banner } from '../Banner/Banner';
import { Footer } from '../Footer/Footer';

const Exito = styled(Title)`
    font-size: 30px;
    
    
`;

export function ExitoDialog(){
    return(
        <>
        <NavBar/>
        <Banner/>
        <Exito>Tu pago a sido exitoso</Exito>
        <Footer/>
        </>

    );
}