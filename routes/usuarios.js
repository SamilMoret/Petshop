import express from 'express';
import usuarioController from '../controllers/usuarios.js';
import { verificarToken } from '../helpers/autenticacao.js';

const route = express.Router();

route.post('/register', usuarioController.register);
route.post('/login', verificarToken, usuarioController.login);
route.get('/profile', verificarToken, usuarioController.profile);


export default route;
