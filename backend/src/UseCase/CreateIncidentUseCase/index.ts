import { IncidentRepository } from "../../repositories/infra/IncidentRespository";
import { CreateIncidentController } from "./CreateIncidentController";
import { CreateIncidentService } from "./CreateIncidentService";


export default(): CreateIncidentController => {
  const incidentRepository = new IncidentRepository();
  const createIncidentService = new CreateIncidentService(incidentRepository);
  const createIncidentController = new CreateIncidentController(createIncidentService);

  return createIncidentController
}