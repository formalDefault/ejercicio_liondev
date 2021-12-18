import React, { useState, useEffect } from 'react'
import img from './img/img'
import ContextStates from "./context/estados";   
import { BrowserRouter as Router, Route, Routes, NavLink } from "react-router-dom";   
import Reservaciones from './Reservaciones';
import ModalReservaciones from './ModalReservaciones'; 
import Salas from './Salas';
import Aos from "aos"; 
import Form from './Formulario'

const NavBar = () => {
    const [stateMenu, setStateMenu ] =  useState(false);
    const handleChange = () => setStateMenu((estado) => !estado)
  
    const menuOpciones = () => {
      return(
        <div data-aos="fade-left"  className="z-50 shadow-lg xl:hidden text-white float-right py-4 w-6/12 bg-gray-900 grid grid-rows gap-y-2">
          <NavLink to="/" onClick={handleChange} className="px-4 py-2 flex justify-between">
            <i className="fas fa-home text-lg"></i>
            <h1>Inicio</h1>
          </NavLink> 
          <NavLink to="/lista" onClick={handleChange} className="px-4 py-2 flex justify-between">
          <i className="fas fa-tasks"></i>
            <h1>Reservaciones</h1>
          </NavLink>  
        </div>
      )
    }
  
    return (
      <div data-aos="fade-down" className="z-50 fixed w-screen">
        <div className="bg-gray-900	 px-4 py-1 text-white flex justify-between">
          <div className="text-2xl"><b>AHL</b></div>
          <i
            onClick={handleChange}
            className="fas fa-bars text-2xl lg:hidden xl:hidden"
          ></i>
          <div className="hidden xl:flex pr-8">
            <NavLink to="/"
              className="px-8 py-2 flex justify-between" 
            >
              <h1>Inicio</h1>
            </NavLink>
            <NavLink to="/lista"
              className="px-8 py-2 flex justify-between"  
            >
              <h1>Reservaciones</h1>
            </NavLink> 
          </div>
        </div>
        {stateMenu ? menuOpciones()  : null} 
      </div>
    );
  }

function App() {
    useEffect(() => {
        Aos.init({ duration: 650 });  
      }, []);  
    return (
      <ContextStates>
        <Router>
            <NavBar/>
            <div className="z-10">
                <Routes>
                    <Route path="/lista" element={<Reservaciones/>} />
                    <Route path="/reserva" element={<ModalReservaciones/>} /> 
                    <Route path="/registro" element={<Form />} />
                    <Route path="/" element={<Salas/>} />
                </Routes> 
            </div>
        </Router>
      </ContextStates>
    );
}

export default App
