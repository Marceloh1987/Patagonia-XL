import React from 'react';
import {useParams} from 'react-router-dom';
import firebase from '../../Firebase/firebase';
import mainStyles from "./Main.module.scss";

const Main = (props) => {
    let {uid} = useParams();

    firebase.database().ref(`/Users/${uid}`).on('value', (snapshot) => {
        console.log(snapshot.val());
    })


    return(
        <div className={mainStyles.container}>
            <div className={mainStyles.wrapper}>
                <div style={{ position: "relative" }}>
                    <h1>UID: {uid}</h1>
                </div>
            </div>
        </div>
    )

}


export default Main;