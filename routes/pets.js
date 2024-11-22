import express from 'express';
const route = express.Router();
import petController from '../controllers/pets.js'
import { verificarToken } from '../helpers/autenticacao.js';

route.post('/', petController.create);
route.get('/:id', petController.getOne);
route.get('/', petController.getAll);
route.put('/:id', verificarToken, petController.update);
route.delete('/:id',verificarToken,petController.delete);


export default route;