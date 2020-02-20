import React from 'react'
import { Router, Route, Switch, Redirect } from 'react-router-dom'
import { createBrowserHistory } from 'history';
//Components
import Home from '../Home';
import {NavBar} from '../Navbar/Navbar';
import Dashboard from '../Dashboard/Dashboard';
import _404 from '../404/404';
import {EsperaDialog} from '../Pago/Espera';
import {ExitoDialog} from '../Pago/Exito';
import {FalloDialog} from '../Pago/Fallo';


export const history = createBrowserHistory();

const NotFoundRedirect = () => <Redirect to='/not-found' />

const Routes = (props) =>{
    return(
        <Router history={history}>
            <NavBar authenticated={props.authenticated} user={props.user} name={props.name} uid={props.uid} />
            <Switch>
                <Route path='/' exact component={() => <Home isAuthed={props.authenticated}/>} />
                <Route path='/dashboard/:uid' component={Dashboard} />
                <Route path='/pago/wating' exact component={EsperaDialog}/>
                <Route path='/pago/exito' exact component={ExitoDialog}/>
                <Route path='/pago/Fallo' exact component={FalloDialog}/>
                <Route path="/not-found" component={_404} />
                <Route component={NotFoundRedirect} />
            </Switch>
        </Router>
    )
}

export default Routes;