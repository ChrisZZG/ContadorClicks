
import React from 'react';
import '../hojas-de-estilo/Boton.css'

// PARA EL PROPS USAMOS SINTAXIS DE DESESTRUCTURACION
// PASANDO DIRECTAMENTE EL VALOR DE LA VARIABLE COMO 
// CODIGO JAVASCRIPT ENTRE LLAVES, ENTONCES LUEGO
// SOLO LLAMO AL NOMBRE DE LA VARIABLES, SIN TENER 
// QUE USAR PROPS.TEXTO
//esBtonDeClic le da un estado al boton
//manejarClic, es una funcion que se pasa como prop
function Boton({texto, esBotonDeClic, manejarClic}) {
    return (
        <button
         className={ esBotonDeClic ? 'boton-clic' : 'boton-reiniciar' }
         onClick={manejarClic}>
            {texto}
        </button>
    )
}

export default Boton;