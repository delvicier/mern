import {pool} from '../db.js';

export const getNota = async (req, res) => {
    try{
    const [result] = await pool.query(
        'SELECT * FROM notas WHERE id = ?', [
        req.params.id
    ]);
    if (result.length === 0)
    return res.status(404).json({ message: "Nota no encontrada :("});
    res.json(result[0]); // El cero es para quitar corchetes
    } catch (error) {
        return res.status(500).json ({ message: error.message});
    }
};

export const getNotas = async (req, res) => {
    try{
    const [result] = await pool.query(
        "SELECT * FROM notas ORDER BY fecha ASC"
    );
    res.json(result);
    } catch (error) {
        return res.status(500).json ({ message: error.message});
    }
}; 

export const createNotas = async (req, res) => {
    try{
    const { titulo, descripcion } = req.body;
    const [result] = await pool.query(
        "INSERT INTO notas(titulo, descripcion) VALUES (?, ?)",
        [titulo, descripcion]
    );
    res.json({
        id: result.insertId,
        titulo, 
        descripcion,
    }); 
    } catch (error) {
        return res.status(500).json ({ message: error.message});
    }
};

export const updateNotas = async (req, res) => {
    try{
    const result = await pool.query("UPDATE notas SET ? WHERE id = ?",[
        req.body,
        req.params.id,
    ]);
    res.json(result);
} catch (error) {
    return res.status(500).json ({ message: error.message});
}
};

export const deleteNotas = async (req, res) => {
    try{
    const [result] = await pool.query("DELETE FROM notas WHERE id = ?",[
        req.params.id,
    ]);
    if(result.affectedRows === 0)
    return res.status(404).json({ message: "nota inexistente"});
    return res.sendStatus(204);
    } catch (error) {
        return res.status(500).json ({ message: error.message});
    }
};