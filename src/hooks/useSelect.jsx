import React, {useState} from 'react';

const useSelect = (stateInicial, opciones) => {
    //guardar el State en memoria
    const [state, cambiarState] = useState(stateInicial);
    //API KEY da66f55188cc4868aa9ae5b2e3d024ec
    const SelectNoticias = () => (
        <select 
            className="browser-default"
            value={state}
            onChange={evt => cambiarState(evt.target.value)}
        >
            <option value="">-- Seleccione una categría --</option>
            {opciones.map(opcion => (
                <option key={opcion.value} value={opcion.value}>{opcion.label}</option>
            ))}
        </select>
    );
    return [state, SelectNoticias];
};

export default useSelect;