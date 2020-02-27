import React from 'react';
import ReactDOM from 'react-dom';
import firebase from './Firebase/firebase';
import Routes, { history } from './Routes/router';
import './index.css';
import * as serviceWorker from './serviceWorker';

const root = document.getElementById('root');

export const renderApp = (hasAuthenticated, user, name, uid) => {

    ReactDOM.render(
        (<div className="App">
            <Routes authenticated={hasAuthenticated} user={user} name={name} uid={uid} />
        </div>), root);
};

firebase.auth().onAuthStateChanged((userAuth) => {
    if (userAuth) {
        const user = userAuth.email;
        const name = userAuth.displayName;
        const uid = userAuth.uid;
        renderApp(true, user, name, uid);
    }
    else {
        renderApp(false, null, null);
    }
});



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
