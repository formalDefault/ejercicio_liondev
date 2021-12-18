import React, { useState } from 'react'
export const ContextStates = React.createContext();

function Estados(props) {
    const [stateMenu, setStateMenu] = useState(true); 
    const [stateFormulario, setStateFormulario] =  useState(false); 
    const [stateLoading, setStateLoading] =  useState(true);  
    const [listaReservaciones, setListaReservaciones] =  useState([]);  
    const [sala, setSala] = useState('');  
    const [APIDATA, setApi] = useState('https://apiliondev.herokuapp.com'); 
    // const [filterOpc, setFilter]  = useState('pendiente');
    return (
        <ContextStates.Provider value={
            {
                stateMenu, 
                setStateMenu,   
                stateFormulario,
                setStateFormulario, 
                stateLoading, 
                setStateLoading,
                sala, 
                setSala,
                listaReservaciones, 
                APIDATA,
                setListaReservaciones
                // filterOpc, 
                // setFilter
            }}>
            {props.children}
        </ContextStates.Provider>
    )
}

export default Estados;