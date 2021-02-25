import React, {useState} from 'react';
import Logo from '../../media/logo.png';
import './Footer.css';
import FooterNav from '../footerNav/FooterNav';

function Footer() {

  const [footerNav] = useState([
    {id:1, item: 'Contacto'},
    {id:2, item: 'Preguntas frecuentes'},
    {id:3, item: 'Distribuidores'},
    {id:4, item: 'Politica de privacidad'},
    {id:5, item: 'Devoluciones'}
  ]);
  const [footerNav2] = useState([
    {id:1, item: 'La Bola 9'},
    {id:2, item: 'Completos certificados'},
    {id:3, item: 'Garantía'},
  ]);

  return (
    <div className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <figure>
            <img src={Logo} alt="logo de la empresa"/>
          </figure>
          <span>Copyright 200, Sector Nine</span>
        </div>
        <div className="footer-nav footer1">
            <h3>SERVICIO AL CLIENTE</h3>
            <ul>
              {footerNav.map((footer) => 
                <FooterNav
                  key = {FooterNav.id}
                  footerNav = {footer}
                />
              )}
            </ul>
        </div>
        <div className="footer-nav footer2">
            <h3>ACERCA DE</h3>
            <ul>
              {footerNav2.map((footer) => 
                <FooterNav
                  key = {FooterNav.id}
                  footerNav = {footer}
                />
              )}
            </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;