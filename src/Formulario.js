import React, {useState, useContext} from 'react'   
import { Formik, Form, Field, ErrorMessage } from "formik"; 
import { ContextStates } from "./context/estados";  
import { NavLink } from 'react-router-dom'
import Axios from 'axios';
 
export default function Formulario() {   
    
    const [showMessage, setShowMessage] = useState(false); 
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
              estado: "pendiente"
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
               var body = valores
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
              <div data-aos='fade-up' className="relative z-40 ">
                <div className=" pt-12 xl:pt-40 pb-8 w-screen">
                  <div className="w-full rounded-2xl text-white m-auto p-4  xl:w-4/12 xl:bg-black xl:py-12  "> 
                    <div className="text-center text-black text-2xl">
                        <h1><b>{titulo}</b></h1> 
                        <hr className="w-8/12 m-auto" />
                    </div>
                    <Form>
                    <Field
                        name="fecha"
                        id="fecha"
                        type="date"
                        placeholder="Nombre completo"
                        className="outline-none text-black border-b-2 border-yellow-600 rounded-lg w-full h-12 my-5 px-4"
                      /> 
                      <Field
                        name="horaInicio"
                        id="horaInicio"
                        type="time"
                        placeholder="Hora de inicio"
                        className="outline-none text-black border-b-2 border-yellow-600 rounded-lg w-full h-12 my-5 px-4"
                      />
                      <Field
                        name="horaFin"
                        id="horaFin"
                        type="time"
                        placeholder="hora fin"
                        className="outline-none text-black border-b-2 border-yellow-600 rounded-lg w-full h-12 my-5 px-4"
                      />  
                      <Field
                        name="titular"
                        id="titular"
                        type="text"
                        placeholder="Nombre del titular"
                        className="outline-none text-black border-b-2 border-yellow-600 rounded-lg w-full h-12 my-5 px-4"
                      />  
                      <ErrorMessage name="titular" component={() => (<div className="text-red-500">{errors.titular}</div>)}/> 
                      <Field
                        name="sala"
                        id="sala"
                        type="text"
                        placeholder="Nombre del sala"
                        className="outline-none text-black border-b-2 border-yellow-600 rounded-lg w-full h-12 my-5 px-4"
                      />  
                       <center>
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

    const mensaje = () => {
        return (
            <div className="absolute z-50 ">   
                    <div className="bg-blue-600 pt-8 xl:bg-transparent xl:pt-40 pb-8 w-screen"> 
                        <div  className="text-center w-5/6 rounded-2xl text-white bg-blue-600 border-2 border-blue-600 m-auto p-4 shadow-2xl xl:w-4/12 xl:py-6 "> 
                            <b>Mensaje enviado</b> 
                        </div>
                    </div>  
            </div>
        )
    }
    
    return (
        <div> 
            {showMessage ? mensaje() : Formulario()}   
        </div>
    )
    
}