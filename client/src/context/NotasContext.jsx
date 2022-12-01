import { createContext, useContext, useState } from "react";
import {getNotasRequest, eliminarNotaRequest, crearNotaRequest, traerNotaRequest, actualizarNotaRequest, cambiarVistoRequest} from '../api/notas.api'

// Para comunicarnos con el
export const NotasContext = createContext();

// Para usar nuestro contexto más facil
export const useNotas = () => {
    const context = useContext(NotasContext)
    if(!context === undefined) {
        throw new Error("useNotas debe ser usado dentro de NotasContextProvider");
    }
    return context;
};

// El contenedor padre para agrupar a todos
export const NotasContextProvider = ({children}) => {
    const [notas, setNotas] = useState([])
    // useState para guardar las peticiones en un arreglo, luego las mandamos como propiedades desde mi contenedor de context de abajo⬇.

    async function cargarNotas() {
        const response = await getNotasRequest()
        setNotas(response.data)
        // indicamos guardar solo la data en nuestro array de useState
      }

    const eliminarNotas = async (id) => {
        try {
            const response = await eliminarNotaRequest(id);
            setNotas(notas.filter(nota => nota.id !== id))
            // filter crea un nuevo array que remplaza el original con los datos que si cumplen la condicion, en este caso:
            // if { los id iniciales no son iguales al id eliminado? si, entonces eliminalo } desigualdad estricta. 
        } catch (error) {
            console.error(error);
        }
    }

    const crearNota = async (nota) => {
        try {
            const response = await crearNotaRequest(nota);
            console.log(response)
          } catch (error) {
            console.error(error)
          }
    };

    const traerNota = async (id) => {
        try {
            const response = await traerNotaRequest(id);
            return response.data
          } catch (error) {
            console.error(error)
          }
    };

    const actualizarNota = async (id, newFields) => {
        try {
            const response = await actualizarNotaRequest(id, newFields);
            return console.log(response)
          } catch (error) {
            console.error(error)
          }
    };

    const cambiarVisto = async (id) => {
      try {
        const notaFound = notas.find((nota) => nota.id === id);
        await cambiarVistoRequest(id, notaFound.realizado === 0 ? true : false);
        setNotas(
          notas.map((nota) =>
            nota.id === id ? { ...nota, realizado: !nota.realizado } : nota
          )
        );
      } catch (error) {
        console.error(error);
      }
    };


    return (
    <NotasContext.Provider value= {{notas, setNotas, cargarNotas, eliminarNotas, crearNota, traerNota, actualizarNota, cambiarVisto}}>
        {children}
    </NotasContext.Provider>
    );
};
// Indicamos "children" para que cualquier hijo acceda