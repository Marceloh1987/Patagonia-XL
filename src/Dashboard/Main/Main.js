import React from 'react';
import mainStyles from "./Main.module.scss";

const Main = (props) => {
    console.log(props.userdata)
    
    return(
        <div className={mainStyles.container}>
            <div className={mainStyles.wrapper}>
                <div style={{ position: "relative" }}>
                    <h1>Bienvenido: Don Wea</h1>
                </div>
            </div>
        </div>
    )

}


export default Main;