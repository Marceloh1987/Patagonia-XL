import React from 'react';
import styled from 'styled-components';
import { Title } from '../Styles/Title';
import { NavBar } from '../Navbar/Navbar';
import { Banner } from '../Banner/Banner';
import { Footer } from '../Footer/Footer';

const Fallo = styled(Title)`
    font-size: 30px;
    
    
`;

export function FalloDialog(){
    return(
        <>
        <NavBar/>
        <Banner/>
        <Fallo>El pago a fallado</Fallo>
        <Footer/>
        </>

    );
}