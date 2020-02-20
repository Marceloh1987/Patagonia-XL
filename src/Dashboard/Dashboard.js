import React from 'react';
import layout from './Dashboard.module.scss';
import Main from './Main/Main';
import Nav from './Nav/Nav';

const Dashboard = () => {
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
                    <Nav />
                    <Main />
                </div>
            </div>
        </div>
    )
}

export default Dashboard;