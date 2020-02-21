import React, {useState} from 'react';
import MenuBtn from "./MenuBtn";
import navStyles from "./Nav.module.scss";
import {NavLink, Link} from 'react-router-dom';


const Nav = (props) => {
    const uid = props.props.uid
    const user_type = props.props.type;


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
                <Link to='/'>
                    Patagonia XL
                </Link>
            </div>
            <span onClick={toggle} className={navStyles.menu}>
                <MenuBtn isOpen={menuBtn.isOpen} />
            </span>
            <ul className={navStyles.nav}>
                <NavLink to={`/dashboard/${uid}/profile`}>
                    <li>
                        <i className="fas fa-user fa-fw"></i>
                        Perfil
                    </li>
                </NavLink>
                {
                    user_type === 'client' ? (
                        <NavLink to={`/dashboard/${uid}/pedidos`}>
                            <li>
                                <i className="fas fa-hamburger fa-fw"></i>
                                Pedidos
                            </li>
                        </NavLink>
                    )
                 :
                    (
                        <>
                            <NavLink to={`/dashboard/${uid}/comandas`}>
                                <li>
                                    <i className="fas fa-clipboard-list fa-fw"></i>
                                    Comandas
                                </li>
                            </NavLink>
                            <NavLink to={`/dashboard/${uid}/products`}>
                                <li>
                                    <i className="fas fa-hamburger fa-fw"></i>
                                    Productos
                                </li>
                            </NavLink>
                            <NavLink to={`/dashboard/${uid}/comandas`}>
                                <li>
                                    <i className="fas fa-money-bill-wave fa-fw"></i>
                                    Pagos
                                </li>
                            </NavLink>
                        </>
                    )
                }
                
                <li onClick={handleLogOut}>
                    <i className="fas fa-sign-out-alt fa-fw"></i>
                    Salir
                </li>
            </ul>
        </nav>
    )
}

export default Nav;