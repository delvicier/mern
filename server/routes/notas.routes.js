// Rutas para realizar el CRUD
import { Router } from "express";
import { getNota,getNotas,createNotas,updateNotas,deleteNotas } from "../controller/notas.controller.js";

const router = Router()

router.get('/notas/:id', getNota);

router.get('/notas', getNotas);

router.post('/notas', createNotas);

router.put('/notas/:id', updateNotas);

router.delete('/notas/:id', deleteNotas);

export default router