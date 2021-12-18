import React, { useEffect, useContext } from 'react'
import { ContextStates } from "./context/estados";  
import { NavLink } from 'react-router-dom' 
import Axios from 'axios';  
     
function Reservaciones() {

    const { APIDATA, listaReservaciones,setListaReservaciones, stateLoading, setStateLoading } = useContext(ContextStates);
    
    useEffect(() => {
        Axios.get(`${APIDATA}/api/get`).then(( response ) => { 
          setListaReservaciones(response.data); 
          setStateLoading(false)
        }) 
        .catch((error) => {console.log(error);})
      }, []);

    const Listar = () => {   
      return (
          <div className="pt-36 mb-12">
            {listaReservaciones.map((i) => {    
              let ruta = `/reserva?id=${i.id}&img=${i.sala}` 
              return (
              <NavLink to={ruta} key={i.id}> 
                  <div  className="z-10 grid grid-cols-1 w-10/12 m-auto">
                      <div  className="border shadow-lg my-2 p-2 rounded-xl flex justify-between">
                          <b>Sala {i.sala}</b>
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

    return (
      <div className="">
        <div className="text-center pt-16 pb-2 border-b bg-white shadow-md fixed w-screen">
            <b>Lista de Reservaciones</b>
            <div className=""> 
            </div>
          {stateLoading ? <div type="submit" className="py-1 w-full px-8 text-black xl:m-auto"><i className="animate-spin fas fa-circle-notch"></i></div> : null}
        </div> 
        <Listar/>  
      </div>
    );
} 
export default Reservaciones
