
import './App.css';
import freeCodeCampLogo from './imagenes/freecodecamp-logo.png'
import Boton from './componentes/Boton.js';
import Contador from './componentes/Contador.js';
//Uso del Hook "use state"
import { useState } from 'react';

function App() {
  //El valor de Hook q se va a modificar
  //seguido de la funcion que lo va a modificar
  const [numClics, setNumClics] = useState(0);

  //DEFINIR UNA FUNCION PARA PASAR POR PROPS
  const manejarClic = () => {
    setNumClics(numClics + 1);
  }

  const reiniciarContador = () => {
    setNumClics(numClics - numClics);
  }

  return (
    <div className="App">
      <div className="freecodecamp-logo-contenedor">
        <img className="freecodecamp-logo" 
        alt="logo"
        src={freeCodeCampLogo} />
      </div>
      <div className="contenedor-principal">  
          {/* componentes, contador y los dos botones.
          En el Caso del Contador, su estado se tiene que 
          actualizar en funcion del boton que se toque */}
          <Contador
          numClics= {numClics} />
          <Boton 
          texto='Click'
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
