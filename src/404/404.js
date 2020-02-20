import React from 'react';
import {Link} from 'react-router-dom';

const _404 = () => {
    return (
        <div style={{margin:'10% 0 0 10%'}}>
            <h1>Sitio no encontrado...</h1>
            <Link to='/'>Volver al Inicio</Link>
        </div>
    )
}

export default _404;