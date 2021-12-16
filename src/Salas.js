import React, { useState, useContext } from 'react'
import img from './img/img'
import {ContextStates} from "./context/estados"; 
import { NavLink } from "react-router-dom"; 

const Salas = () => {

    const [name, setName] = useState();
    const [description, setDescription] = useState();
    const [imagen, setImagen] = useState(); 
    const [state, setState] = useState(false);
    const { setSala } = useContext(ContextStates);

    const Tarjeta = (imagen, name, description) => {
        const seleccionar = () => {
            setImagen(imagen);
            setDescription(description);
            setName(name);
            setState(true);
        }
        return (
          <div data-aos="zoom-in" onClick={() => {
            setSala(name);
            seleccionar();
          }} className="w-full m-auto rounded-xl border shadow-lg cursor-pointer hover:shadow-2xl hover:shadow-gray-700">
            <img src={imagen} alt="sala" className="rounded-t-xl xl:object-cover xl:h-96 xl:w-full" />
            <div className="p-2 ">
              <div className="flex justify-between">
                <b>{name}</b> 
              </div>
              <h2>Sala</h2> 
            </div>
          </div>
        );
    } 

    const VistaTarjeta = () => {
        return (
          <div data-aos="fade-up" 
               className="relative z-10 bg-gray-800 w-10/12 m-auto rounded-xl top-16 text-white shadow-xl shadow-gray-600 xl:w-4/12"> 
            <img src={imagen} alt="sala" className="rounded-t-xl w-full h-64 object-cover xl:h-96 " />
            <div className="p-2 ">
              <div className="flex justify-between">
                <b>{name}</b> 
              </div>
              <h2>Sala</h2>
              <div className="text-sm pt-4">
                <h2>{description}</h2>
              </div>
              <div className="w-8/12 m-auto text-center mt-8 mb-4">
                <NavLink to='/registro'>
                  <button className="bg-orange-500 w-full rounded-lg">
                    Reservar
                  </button>
                </NavLink>
              </div>
              <div className="w-8/12 m-auto text-center mt-2 mb-4">
                <button onClick={() => setState(false)} className="bg-red-500 w-full rounded-lg">
                  Volver
                </button>
              </div>
            </div>
          </div>
        );
    }

    return (
      <div>
        {state ? (
          <VistaTarjeta />
        ) : (
          <div>
            <div className=" text-center text-xl pt-16 pb-8">
              <b>Salas de juntas excepcionales</b>
            </div>
            <div className="px-4 py-4 grid grid-cols-2 gap-4 xl:grid-cols-3 xl:px-20">
              {Tarjeta(
                img.sunset,
                "Sunset",
                "La sala perfecta para una reunion de amigos, ya que la sala sunset cuenta con un estilo tropical unico"
              )}
              {Tarjeta(
                img.future,
                "Future",
                "Perfecta para una reunion profesional, ya que la sala future cuenta con un estilo moderno y minimalista"
              )}
              {Tarjeta(
                img.nature,
                "Nature",
                "Perfecta para reuniones casuales, y disfrutar de una area verde y fresca"
              )}
            </div>
          </div>
        )}
      </div>
    );
}  

export default Salas
