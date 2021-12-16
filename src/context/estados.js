import React, { useState } from 'react'
export const ContextStates = React.createContext();

function Estados(props) {
    const [stateMenu, setStateMenu] = useState(false); 
    const [stateFormulario, setStateFormulario] =  useState(false); 
    const [stateLoading, setStateLoading] =  useState(true);  
    const [modalPop, setModalPop] = useState(false);
    return (
        <ContextStates.Provider value={
            {
                stateMenu, 
                setStateMenu,   
                stateFormulario,
                setStateFormulario, 
                stateLoading, 
                setStateLoading,
                modalPop, 
                setModalPop
            }}>
            {props.children}
        </ContextStates.Provider>
    )
}

export default Estados;