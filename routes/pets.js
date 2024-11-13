import express from 'express';
const route = express.Router();
import petController from '../controllers/pets.js'



route.post('/', petController.create);
route.get('/:id', petController.getOne);
route.get('/', petController.getAll);
route.put('/:id', petController.update);
route.delete('/:id', petController.delete);


export default route;