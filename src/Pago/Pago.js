import React, {useEffect, useState} from 'react';
import * as MP from 'mercadopago';
import credentials from './credentials.json';


export const Pago = (props) => {
    console.log(props);

    const orders = props.location.query.orders;
    const [mpData, setMpData] = useState(null);
    
    const config = () =>{
        MP.configure({
            sandbox:true,
            access_token: credentials.access_token
        });
        MP.configurations.setAccessToken(credentials.access_token);
    }
}
