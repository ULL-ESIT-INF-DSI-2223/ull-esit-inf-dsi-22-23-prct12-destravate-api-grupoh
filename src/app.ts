import express from 'express';
import './db/mongoose.js';
import { rutaRouter } from './routers/servidor_ruta.js';
import { usuarioRouter } from './routers/servidor_usuario.js';
import { grupoRouter } from './routers/servidor_grupo.js';
import { retoRouter } from './routers/servidor_reto.js';
import { defaultRouter } from './routers/default.js';

// inicia la aplicación express
export const app = express();
app.use(express.json());
app.use(rutaRouter);
app.use(usuarioRouter);
app.use(grupoRouter);
app.use(retoRouter);
app.use(defaultRouter);
