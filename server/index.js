import express from "express";
import {PORT} from './config.js'
import indexRoutes from './routes/index.routes.js';
import notasRoutes from './routes/notas.routes.js';

const app = express();

// Antes que pasen las peticiones a las rutas debemos darle formato:
app.use(express.json());

app.use(indexRoutes);

// Agregando las rutas al index
app.use(notasRoutes);

app.listen(PORT);
console.log(`Servidor corriendo en puerto ${PORT}`);