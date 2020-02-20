import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import firebase from '../Firebase/firebase';
import layout from './Dashboard.module.scss';
import Main from './Main/Main';
import Nav from './Nav/Nav';

const Dashboard = () => {

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
                margin: '8% 0 0 0',
                overflow: "hidden",
                height: "100vh",
                width: "100vw",
                position: "relative"
                }}
            >
                <div className={layout.container}>
                    <div className={layout.section}>
                        <Nav userdata={userData} />
                        <Main userdata={userData} />
                    </div>
                </div>
            </div>
        )
    }
    else{
        return(
            <h1 style={{margin:'15% 0 0 25%'}}>Cargando...</h1>
        )
    }
}

export default Dashboard;