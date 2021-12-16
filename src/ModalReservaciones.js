import React, { useState, useEffect, useContext } from 'react'
import { ContextStates } from "./context/estados"; 
import { useLocation, NavLink } from "react-router-dom";
import Axios from "axios"
import img from './img/img'

const ModalReservaciones = () => { 
    const { listaReservaciones, APIDATA } = useContext(ContextStates); 
    const [state, setState] = useState('Cancelar')
    const useQuery = () => {return new URLSearchParams(useLocation().search)};
    let query = useQuery(); 
    const buscador = (xid) => listaReservaciones.find(i => i.id == xid);
    let reserva = buscador(query.get("id"))  
    const Tarjeta = () => { 
        return (
          <div
            data-aos="fade-up"
            className="relative top-20 bg-gray-800 z-10 w-9/12 m-auto rounded-xl shadow-2xl text-white border border-indigo-600 shadow-black xl:w-4/12"
          >
            <img
              src={img.nature}
              alt="sala"
              className="rounded-t-xl object-cover w-full h-48 xl:h-96 "
            />
            <div className="p-2 ">
              <div className="flex justify-between">
                <b>{reserva.sala}</b>
                <div className="px-2 text-white bg-green-500 rounded-full">
                  <h2>{reserva.estado}</h2>
                </div>
              </div>
              <h2>Sala</h2>
              <div className="text-sm pt-4 grid grid-cols-3 gap-2 ">
                <div className="bg-gray-500 text-center">
                  <b>Fecha:</b>
                  <br />
                  {reserva.fecha.slice(0, 10)}
                </div>
                <div className="bg-gray-500 text-center">
                  <b>Hora Inicio:</b>
                  <br />
                  {reserva.horaInicio}
                </div>
                <div className="bg-gray-500 text-center">
                  <b>Hora Fin:</b>
                  <br />
                  {reserva.horaFin}
                </div>
                <div className="bg-gray-500 text-center col-span-3">
                  <b>Titular:</b>
                  <br />
                  {reserva.titular}
                </div>
              </div>
              <div
                className="w-full m-auto text-center mt-8 mb-4"
                onClick={() =>
                  Axios.put(`${APIDATA}/api/cancelar/${reserva.id}`).then((response) => {
                    setState(response.data);
                  }).catch((error) => {console.log(error);})
                }
              >
                <button className="bg-orange-500 w-full rounded-lg">
                  {state}
                </button>
              </div>
              <NavLink
                to="/lista"
                className="w-full m-auto text-center mt-8 mb-4"
              >
                <button className="bg-red-500 w-full rounded-lg">volver</button>
              </NavLink>
            </div>
          </div>
        );
    }

    return (
      <div className=" ">
        <div className=""> 
          <Tarjeta /> 
        </div>
      </div>
    );
}

export default ModalReservaciones
