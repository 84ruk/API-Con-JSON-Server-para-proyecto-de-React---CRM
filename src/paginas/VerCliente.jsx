import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Spinner } from "../components/Spinner";


export const VerCliente = () => {
  
  const [cliente, setCliente] = useState({});
  const [cargando, setCargando] = useState(true);
  const {nombre, email, telefono, notas, empresa} = cliente;
  const {id} = useParams();
  
  
  
  useEffect(() => {
    
      const obtenerClienteAPI = async () => {
        try {
          const url = `http://localhost:4000/clientes/${id}`
          const respuesta = await fetch(url)
          const resultado = await respuesta.json()
          setCliente(resultado)
        } catch (error) {
          console.log(error)
        }
        setTimeout(() => {
          setCargando(!cargando) 
        }, 700);
      }
      obtenerClienteAPI()
    }, []);
    
  return <div>
    {cargando ? <Spinner/> : 
    Object.keys(cliente).length === 0 ? 
    <p>No hay resultado</p> : 
    (
      <>
        <h1 className='font-black text-4xl text-blue-900 capitalize'>Ver Cliente: {nombre} </h1>
        <p className='mt-3'>Informacion del Cliente</p>
    
        <p className="text-4xl text-gray-600 mt-10 capitalize"> 
          <span className="uppercase font-bold text-gray-800">Cliente:</span>{nombre}
        </p>
        {(email && <p className="text-2xl text-gray-600 mt-4 capitalize">
          <span className="uppercase font-bold text-gray-800">Email:</span>{email}
        </p>)}
        {telefono && (<p className="text-2xl text-gray-600 mt-4 ">
          <span className="uppercase font-bold text-gray-800">Teléfono:</span>{telefono}
        </p>)}
        {empresa && (<p className="text-2xl text-gray-600 mt-4 capitalize">
          <span className="uppercase font-bold text-gray-800">Empresa:</span>{empresa}
        </p>)}
        {notas && (<p className="text-2xl text-gray-600 mt-4 capitalize">
          <span className="uppercase font-bold text-gray-800">Notas:</span>{notas}
        </p>)}
      </>
      
    )}
    
  </div>
};
