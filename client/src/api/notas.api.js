import axios from 'axios'

export const getNotasRequest = async () =>
    await axios.get(`http://localhost:4000/notas`);

export const crearNotaRequest = async (nota) =>
    await axios.post(`http://localhost:4000/notas`, nota);

export const eliminarNotaRequest = async (id) =>
    await axios.delete(`http://localhost:4000/notas/${id}`);

export const traerNotaRequest = async (id) =>
    await axios.get(`http://localhost:4000/notas/${id}`);

export const actualizarNotaRequest = async (id, newFields) =>
    await axios.put(`http://localhost:4000/notas/${id}`, newFields);

export const cambiarVistoRequest = async (id, realizado) =>
    await axios.put(`http://localhost:4000/notas/${id}`, { 
        realizado,
    });