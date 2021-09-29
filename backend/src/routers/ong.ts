import { Router } from 'express';
import  createOngController  from '../UseCase/CreateOngUseCase';
import sessionOngController  from '../UseCase/SessionOng';

const ongRouter = Router();

ongRouter.post('/', (request, response) => {
  return createOngController().handler(request, response)
})

ongRouter.post('/session', (request, response) => {
  return sessionOngController().handler(request, response)
})

export { ongRouter }