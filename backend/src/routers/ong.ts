import { Router } from 'express';
import createOngController  from '../controller/CreateOng';

const ongRouter = Router();

ongRouter.post('/', (request, response) => {
  return createOngController().handler(request, response)
})

export { ongRouter }