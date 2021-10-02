import {Router} from 'express';
import { Incident } from '../entities/Incident';
import  createIncidentController from '../UseCase/CreateIncidentUseCase';
import deleteIncidentController from '../UseCase/DeleteIncident';
import  listIncidentsInProfileController  from '../UseCase/ListincidentsInProfile';

const incidentRouter = Router();



incidentRouter.get('/', (req, res) => {
  return listIncidentsInProfileController().handler(req, res)
})

incidentRouter.post('/', (request, response) => {
  return createIncidentController().handler(request, response)
})

incidentRouter.delete('/delete/:id', (req, res) => {
  return deleteIncidentController().handler(req, res)
})


export { incidentRouter }