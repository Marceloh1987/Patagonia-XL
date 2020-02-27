import React from 'react';
import styled from 'styled-components';
import { Title } from '../Styles/Title';
import { NavBar } from '../Navbar/Navbar';
import { Banner } from '../Banner/Banner';
import { Footer } from '../Footer/Footer';

const Espera = styled(Title)`
    font-size: 30px;
    
    
`;

export function EsperaDialog(){
    return(
        <>
        <NavBar/>
        <Banner/>
        <Espera>Tu pago esta siendo procesado...</Espera>
        <Footer/>
        </>

    );
}