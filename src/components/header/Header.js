import React from 'react';
import './Header.css';
import Logo from '../../media/logo.png';

const Header = () => {
  return ( 
    <header>
        <div className="menu">
            <figure className="logo">
                <img src={Logo} alt="logo principal"/>
            </figure>
            <nav className="menu__container">
                <ul>
                    <li className="menu__items">
                        <a href="#">
                            Tablas
                        </a>
                    </li>
                    <li className="menu__items">
                        <a href="#">
                            Llantas
                        </a>
                    </li>
                    <li className="menu__items">
                        <a href="#">
                            Componentes
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
   );
}
 
export default Header;