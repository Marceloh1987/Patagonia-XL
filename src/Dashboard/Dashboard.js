import React, {useState, useEffect} from 'react';
import { Router, Route, Switch, useParams } from 'react-router-dom'
import { createBrowserHistory } from 'history';
import firebase from '../Firebase/firebase';
import layout from './Dashboard.module.scss';
import Profile from './Profile/Profile';
import Comandas from './Comandas/Comandas';
import Pedidos from './Pedidos/Pedidos';
import Products from './Products/products';
import Main from './Main/Main';
import Nav from './Nav/Nav';

export const history = createBrowserHistory();


const DashboardRoute = (props) => {
    return(
        <Router history={history}>
            <Nav props={props.userData} />
            <Switch>
                <Route exact path="/dashboard/:uid" component={() => <Main props={props.userData} />} />
                <Route exact path="/dashboard/:uid/pedidos" component={Pedidos} />
                <Route exact path="/dashboard/:uid/profile" component={Profile} />
                <Route exact path='/dashboard/:uid/products' component={Products} />
                <Route exact path='/dashboard/:uid/comandas' component={Comandas} />
            </Switch>
        </Router>

    )
}

const Dashboard = (props) => {

    let {uid} = useParams();
    
    const [userData, setUserData] = useState(null)

    useEffect(() => {
        firebase.database().ref(`/Users/${uid}`).on('value', (snapshot) => {
            setUserData(snapshot.val());
        })

    }, [])

    if(userData){
        return (
            <div
                style={{
                backgroundColor: '#ffffff',
                margin: '5% 0 0 0',
                overflow: "hidden",
                height: "100vh",
                width: "100vw",
                position: "relative"
                }}
            >
                <div className={layout.container}>
                    <div className={layout.section}>
                        <DashboardRoute userData={userData} />
                    </div>
                </div>
            </div>
        )
    }
    else{
        return(
            <h1 style={{margin:'20% 0 0 0'}}>Cargando...</h1>
        )
    }
}

export default Dashboard;