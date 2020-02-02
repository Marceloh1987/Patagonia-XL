import React from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import { createBrowserHistory } from 'history';
//Components
import {Home} from '../Home';

export const history = createBrowserHistory();

const Routes = (props) =>{
    console.log(props)
    return(
        <Router history={history}>
            <Switch>
                <Route path='/' exact component={Home} />
            </Switch>
        </Router>
    )
}

export default Routes;