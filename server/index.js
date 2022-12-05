import express from "express";
import cors from 'cors'
import notasRoutes from './routes/notas.routes.js';
import * as dotenv from 'dotenv'

dotenv.config();
const app = express();

// Antes que pasen las peticiones a las rutas debemos darle formato:
app.use(express.json());
app.use(cors ({ origin: 'http://localhost:3000' }))

// Agregando las rutas al index
app.use(notasRoutes);

app.listen(process.env.PUERTO, () => {
    console.log('Servidor corriendo en puerto: ' +process.env.PUERTO);
});