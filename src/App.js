import './App.css';
import gartLogo from './images/gartLogo.png';
import Contador from './components/Contador';
import Boton from './components/Boton';


function App() {

  const manejarClic = () => {
    console.log('Clic');
  }

  const reiniciarContador = () => {
    console.log('Reiniciar');
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
        <Contador numClics='5' />
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
