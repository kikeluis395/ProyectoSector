import React from 'react';
import './Hero.css';

const Hero = () => {
  return ( 
    <section className="hero">
            <div className="hero__social">
                <div className="hero__redes">
                    <i className="fab fa-instagram"></i>
                    <i className="fab fa-twitter"></i>
                </div>
                <div className="hero__content">
                    <p>Si estás buscando escribir tu nombre en al calle, entonces quieres una tabla de Sector Nine</p>
                </div>
                <div className="hero__sections">
                    <div className="hero__indicadores">
                        <div className="active">inicio</div>
                        <div>01</div>
                        <div>02</div>
                        <div>03</div>
                    </div>
                </div>
            </div>
            <section className="gradient"></section>
    </section>
   );
}
 
export default Hero;