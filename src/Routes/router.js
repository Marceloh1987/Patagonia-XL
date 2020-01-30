import React from 'react'
import { Route, Switch, BrowserRouter } from 'react-router-dom'
//Components
import {Home} from '../Home';


export const Routes = () =>{
    
    return(
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Home} />
            </Switch>
        </BrowserRouter>
    )
}