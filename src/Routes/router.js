import React from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import { createBrowserHistory } from 'history';
//Components
import Home from '../Home';
import {NavBar} from '../Navbar/Navbar';

export const history = createBrowserHistory();

const Routes = (props) =>{
    console.log(props)
    return(
        <Router history={history}>
            <NavBar authenticated={props.authenticated} user={props.user} />
            <Switch>
                <Route path='/' exact component={Home} />
            </Switch>
        </Router>
    )
}

export default Routes;