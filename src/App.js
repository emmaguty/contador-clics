import './App.css';
import gartLogo from './images/gartLogo.png';

function App() {
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
        <Boton
          texto='Clic'
          esBotonDeClic={true}
          manejarClic={} />
        <Boton
          texto='Reiniciar'
          esBotonDeClic={false}
          manejarClic={} />
      </div>
    </div>
  );
}

export default App;
