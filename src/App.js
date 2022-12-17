import './App.css';
import gartLogo from './images/gartLogo.png';
import Contador from './components/Contador';
import Boton from './components/Boton';

//Hook usestate para agregar un estado a un componente funcional
//Este Hook es de los mas importantes
import { useState } from 'react';


function App() {

  const [numClics, setNumClics] = useState(0); 

  const manejarClic = () => {
    setNumClics(numClics + 1);
  }

  const reiniciarContador = () => {
    setNumClics(0);
  }

  return (
    <div className="App">
      <div className='freecodecamp-logo-contenedor'>
        <img
        className='freecodecamp-logo' 
        src={gartLogo} 
        alt='Logo de freeCode' 
        />
      </div>
      <div className='contenedor-principal'>
        <Contador numClics={numClics} />
        <Boton
          texto='Clic'
          esBotonDeClic={true}
          manejarClic={manejarClic} />
        <Boton
          texto='Reiniciar'
          esBotonDeClic={false}
          manejarClic={reiniciarContador} />
      </div>
    </div>
  );
}

export default App;
