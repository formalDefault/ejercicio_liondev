import React, { useState, useEffect, useContext } from 'react'
import { ContextStates } from "./context/estados";  
import { NavLink } from 'react-router-dom'
import img from './img/img'
import Axios from 'axios';  
     
function Reservaciones() {

    const { APIDATA, listaReservaciones,setListaReservaciones, filterOpc, setFilter } = useContext(ContextStates);
    
    useEffect(() => {
        Axios.get(`${APIDATA}/api/get`).then(( response ) => { 
          setListaReservaciones(response.data); 
        }) 
        .catch((error) => {console.log(error);})
      }, []);

    const Listar = () => {  
      
      // let filtro = listaReservaciones.filter((i) => i.estado == filterOpc);
      // console.log(filtro, filterOpc)
      return (
          <div className="pt-36 mb-12">
            {listaReservaciones.map((i) => {   
              let ruta = `/reserva?id=${i.id}`
              return (
              <NavLink to={ruta} key={i.id}> 
                  <div  className="z-10 grid grid-cols-1 w-10/12 m-auto">
                      <div  className="border shadow-lg my-2 p-2 rounded-xl flex justify-between">
                          <b>{i.sala}</b>
                          <div className="">
                              <b>{i.fecha.slice(0, 10)}</b>
                          </div>
                      </div>
                  </div>
              </NavLink>
              )
            })}
          </div>
      )
    } 
      const filtroChange = (select) => {  
        setFilter(select.value); 
      }

    return (
      <div className="">
        <div className="text-center pt-16 pb-2 border-b bg-white shadow-md fixed w-screen">
            <b>Lista de Reservaciones</b>
            <div className="">
              {/* <select 
                className="outline-none bg-white border rounded-lg mt-2 p-1 text-black px-2 w-4/12 cursor-pointer" 
                id='selectFilter' 
                value={filterOpc} 
                onChange={() => filtroChange(document.getElementById('selectFilter'))}
              >
                <option value="pendiente">Pendientes</option> 
                <option value="finalizado">Finalizados</option>
                <option value="En uso">En uso</option>
              </select>  */}
            </div>
        </div>
        <Listar/>  
      </div>
    );
} 
export default Reservaciones
