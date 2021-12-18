import React, {useState, useContext} from 'react'   
import { Formik, Form, Field, ErrorMessage } from "formik"; 
import { ContextStates } from "./context/estados";  
import { NavLink } from 'react-router-dom'
import Axios from 'axios';
 
export default function Formulario() {    
    const [titulo, setTitulo] = useState('Registrar reservacion');
    const { sala, APIDATA } = useContext(ContextStates);

    const Formulario = () => {
        return (
          <Formik
            //valores de los campos del formulario
            initialValues={{
              fecha: "",
              horaInicio: "",
              horaFin: "",
              titular: "",
              sala: sala,
              estado: "pendiente",
            }}
            //validacion de los input
            validate={(valores) => {
              let errores = {};

              //validacion para nombre
              if (!valores.titular) {
                errores.titular = "ingresa un nombre";
              } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.titular)) {
                errores.titular =
                  "El nombre solo puede tener letras y espacios";
              }

              return errores;
            }}
            //funcion del boton de enviar
            onSubmit={(valores) => {
              var body = valores;  
              Axios.post(`${APIDATA}/api/insert`, body)
                .then((response) => {
                  setTitulo(response.data); 
                })
                .catch((err) => {
                  console.log(err);
                });
            }}
          >
            {({ errors }) => (
              <div data-aos="fade-up" className="relative z-40 ">
                <div className=" pt-12 xl:pt-28 pb-8 w-screen">
                  <div className="w-full rounded-2xl  m-auto p-4  xl:w-4/12 xl:border xl:shadow-xl xl:shadow-gray-700 ">
                    <div className="text-center text-black text-2xl mb-4">
                      <h1>
                        <b>{titulo}</b>
                      </h1>
                      <hr className="w-8/12 m-auto" />
                    </div>
                    <Form>
                      <label>Fecha:</label>
                      <Field
                        name="fecha"
                        id="fecha"
                        type="date"
                        placeholder="Nombre completo"
                        className="outline-none text-black border-b-2 border-yellow-600 rounded-lg w-full h-12 mb-5 px-4"
                      />
                      <label>Hora de inicio:</label>
                      <Field
                        name="horaInicio"
                        id="horaInicio"
                        type="time"
                        placeholder="Hora de inicio"
                        className="outline-none text-black border-b-2 border-yellow-600 rounded-lg w-full h-12 mb-5 px-4"
                      />
                      <label>Hora de termino:</label>
                      <Field
                        name="horaFin"
                        id="horaFin"
                        type="time"
                        placeholder="hora fin"
                        className="outline-none text-black border-b-2 border-yellow-600 rounded-lg w-full h-12 mb-5 px-4"
                      />
                      <Field
                        name="titular"
                        id="titular"
                        type="text"
                        placeholder="Nombre del titular"
                        className="outline-none text-black border-b-2 border-yellow-600 rounded-lg w-full h-12 mb-5 px-4"
                      />
                      <ErrorMessage
                        name="titular"
                        component={() => (
                          <div className="text-red-500">{errors.titular}</div>
                        )}
                      />
                      <label>Sala de juntas:</label>
                      <Field
                        name="sala"
                        id="sala"
                        type="text"
                        placeholder="Nombre del sala"
                        className="outline-none text-black border-b-2 border-yellow-600 rounded-lg w-full h-12 mb-5 px-4"
                      />
                      <center className="text-white"> 
                          <button
                            type="submit"
                            className="py-1 w-full rounded-xl px-8 bg-gradient-to-r from-pink-700 to-yellow-500"
                          >
                            Registrar
                          </button> 
                        <div className="mt-4 ">
                          <NavLink
                            to="/"
                            className="py-1 top-8 rounded-xl px-8 bg-red-500"
                          >
                            Volver
                          </NavLink>
                        </div>
                      </center>
                    </Form>
                  </div>
                </div>
              </div>
            )}
          </Formik>
        );
    } 
    
    return (
        <div> 
            <Formulario />  
        </div>
    )
    
}