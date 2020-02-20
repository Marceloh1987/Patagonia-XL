import React, {useState} from 'react';
import MenuBtn from "./MenuBtn";
import navStyles from "./Nav.module.scss";
import {NavLink} from 'react-router-dom';


const Nav = (props) => {
    console.log(props.userdata)


    const [menuBtn, setmenuBtn] = useState({ isOpen: false });
    const toggle = () =>{
        setmenuBtn({ isOpen: !menuBtn.isOpen });
    }
    const handleLogOut = () =>{
        console.log('loging out...');
    }

    return (
        <nav className={navStyles.navWrapper}>
            <div className={navStyles.logo}>
                <NavLink to='/'>
                    Patagonia XL
                </NavLink>
            </div>
            <span onClick={toggle} className={navStyles.menu}>
                <MenuBtn isOpen={menuBtn.isOpen} />
            </span>
            <ul className={navStyles.nav}>
                <NavLink to='/Profile'>
                    <li>
                        <i className="fas fa-user fa-fw"></i>
                        Perfil
                    </li>
                </NavLink>
                <NavLink to='/Pedidos'>
                    <li>
                        <i className="fas fa-hamburger fa-fw"></i>
                        Pedidos
                    </li>
                </NavLink>
                <li onClick={handleLogOut}>
                    <i className="fas fa-sign-out-alt fa-fw"></i>
                    Salir
                </li>
            </ul>
        </nav>
    )
}

export default Nav;