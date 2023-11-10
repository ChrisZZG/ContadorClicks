
import React from 'react';
import '../hojas-de-estilo/Contador.css'

function Contador({ numClics }) {
    return (
        <div className="contador">
            {`Conteo Total de Clicks:` + numClics}
        </div>
    );

}

export default Contador;