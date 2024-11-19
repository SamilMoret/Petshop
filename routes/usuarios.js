import express from 'express';
import usuarioController from '../controllers/usuarios.js';

const route = express.Router();

route.post('/register', usuarioController.register);
route.post('/login', usuarioController.login);

export default route;
