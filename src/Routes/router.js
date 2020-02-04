import React from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import { createBrowserHistory } from 'history';
//Components
import {Home} from '../Home';
import {EsperaDialog} from '../Pago/Espera';
import {ExitoDialog} from '../Pago/Exito';
import {FalloDialog} from '../Pago/Fallo';

export const history = createBrowserHistory();

const Routes = (props) =>{
    console.log(props)
    return(
        <Router history={history}>
            <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/pago/wating' exact component={EsperaDialog}/>
                <Route path='/pago/exito' exact component={ExitoDialog}/>
                <Route path='/pago/Fallo' exact component={FalloDialog}/>
            </Switch>
        </Router>
    )
}

export default Routes;