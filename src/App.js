import React, {useState} from 'react';
import Header from './components/header/Header';
import Hero from './components/hero/Hero';
import Section from './components/section/Section';
import './App.css'
import Footer from './components/footer/Footer';
import img1 from './media/01.png';
import img2 from './media/02.png';
import img3 from './media/03.png';

function App() {
  const [sections, setSections] = useState([

    { id:1, titulo: 'CRUISER', descripcion: 'Si bien la mayoría de las tablas de nuestra línea son capaces de navegar, una tabla designada como crucero suele ser un poco más corta que una tabla corta estándar con una punta más corta, una forma más direccional y ruedas suaves. La mayoría de estas tablas se construyen a partir de moldes regulares de tablas cortas y son capaces de patinar en una variedad de terrenos, incluidos parques, pero también pueden cruzar un paseo marítimo.' ,numero:'01', img: img1},
    { id:2, titulo: 'CARVING', descripcion: 'Si le gustan las tablas que mantienen bien su línea en los giros y no se deslizan mucho, esté atento a esta designación. Eso no significa que no se deslizarán en absoluto, sino que, por lo general, están configurados con ruedas con bordes que se agarran mejor mientras mantienen la velocidad. Todos nuestros modelos completos con ejes Gullwing Sidewinder II se consideran tablas de Carving, pero este estilo de conducción tampoco es exclusivo de ellos.' ,numero:'02', img: img2},
    { id:3, titulo: 'DOWNHILL', descripcion: 'Las tablas con la designación Downhill están diseñadas para bajar por grandes colinas o pasos de montaña. Esto no significa que tenga una licencia automática para cargar por estas colinas, sino que la tabla puede manejarlo si tiene la capacidad. Las tablas de descenso suelen tener moldes más complejos, construcciones únicas y hardware y componentes de primera calidad. Siempre patine dentro de sus propias capacidades y use un casco.' ,numero:'03', img: img3},

  ]);
  return (
    <div className="App">
      <Header />
      <Hero />
      <div className="container_main">
        {sections.map( section => (
            <Section
              key = {section.id}
              section = {section}
            />
        ))}
      </div>
      <Footer
      
      />
    </div>
  );
}

export default App;
