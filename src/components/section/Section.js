import React from "react";
import "./Section.css";
import Img1 from "../../media/01.png";
import Arrow from "../../media/arrow.png";
function Section({section}) {

  const {numero, descripcion, titulo, id, img} = section;

  return (
    
    <div className="container">
      <div className="card__container">
        <div className="card">
          <div className={`content ${numero % 2 ? "" : "order2"}`}>
            <div className="content__descripcion">
              <h2>{titulo}</h2>
              <p>
                {descripcion}
              </p>
              <div className="content__read">
                <a href="">Leer más</a>
                <img src={Arrow} alt="flecha" />
              </div>
            </div>
            <div className="content__number">{numero}</div>
          </div>
          <figure className={`content__img ${numero % 2 ? "margin_impar" : "margin_par"}`}>
            <img src={img} alt="imagen skate" />
          </figure>
        </div>
      </div>
    </div>
    
  );
}

export default Section;
