import { IncidentRepository } from "../../repositories/infra/IncidentRespository";
import { ListIncidentsInProfileController } from "./ListIncidentInProfileController";
import { ListIncidentsInProfileService } from "./ListIncidentsInProfileService";



export default(): ListIncidentsInProfileController => {
  const incidentsRepository = new IncidentRepository();
  const listIncidentsInProfileService = new ListIncidentsInProfileService(incidentsRepository);
  const listIncidentsInProfileController = new ListIncidentsInProfileController(listIncidentsInProfileService)

  return listIncidentsInProfileController
}