import React, { useState } from 'react'
import img from './img/img'
import ContextStates from "./context/estados";      

const NavBar = () => {
    return (
        <div>
            <div className="bg-gray-800 p-4 text-white flex justify-between">
                <div>
                    <b>AHL</b>
                </div>
                <div className="flex justify-between">
                    <i className="fas fa-bars text-2xl"></i>
                </div>
            </div>
        </div>
    )
}

const Salas = () => {
    const [state, setState] = useState(false); 

    const Modal = () => {
        const Tarjeta = () => {
            return (
              <div className="bg-gray-800 z-50 w-10/12 m-auto rounded-xl mt-32 text-white border border-indigo-600 shadow-lg">
                <img src={img.imgSala} alt="sala" className="rounded-t-xl" />
                <div className="p-2 ">
                  <div className="flex justify-between">
                    <b>Sunset</b>
                    <div className="px-2 text-white bg-green-500 rounded-full">
                      <h2>Libre</h2>
                    </div>
                  </div>
                  <h2>Sala</h2>
                  <div className="text-sm pt-4">
                    <h2>
                      La sala perfecta para una reunion de amigos, ya que la
                      sala sunset cuenta con un estilo tropical unico
                    </h2>
                  </div>
                  <div className="w-8/12 m-auto text-center mt-8 mb-4">
                    <button className="bg-orange-500 w-full rounded-lg">
                      Reservar
                    </button>
                  </div>
                </div>
              </div>
            );
        }
        return (
          <div className=" ">
            <div className="absolute top-0 bg-black bg-opacity-40 h-screen w-screen">
              <Tarjeta />
            </div>
          </div>
        );
    }

    const Tarjeta = (props) => {
        return (
          <div onClick={() => setState(true)} className="w-10/12 m-auto rounded-xl border shadow-lg">
            <img src={props.imagen} alt="sala" className="rounded-t-xl" />
            <div className="p-2 ">
              <div className="flex justify-between">
                <b>{props.name}</b>
                <div className="px-2 text-white bg-green-500 rounded-full">
                    <h2>{props.estado}</h2>
                </div>
              </div>
              <h2>Sala</h2> 
            </div>
          </div>
        );
    }
    return(
        <div>
            <div className=" text-center text-xl py-8 ">
                <b>Salas de juntas excepcionales</b>
            </div>
            <div className="py-4 grid grid-cols-2 gap-y-4">
                <Tarjeta name="Sunset" estado="Libre" imagen={img.imgSala}/> 
                <Tarjeta name="Future" estado="Libre" imagen={img.imgSala}/> 
                <Tarjeta name="Nature" estado="Libre" imagen={img.imgSala}/> 
            </div>
            {state ? <Modal/> : null}
        </div>
    )
} 

const listaReservaciones = () => {}

function App() {
    return (
      <ContextStates>
        <div className="">
          <NavBar />
          <Salas />  
        </div>
      </ContextStates>
    );
}

export default App
