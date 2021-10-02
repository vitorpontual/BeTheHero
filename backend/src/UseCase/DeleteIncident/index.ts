import { IncidentRepository } from "../../repositories/infra/IncidentRespository"
import { DeleteIncidentController } from "./DeleteIncidentController";
import { DeleteIncidentService } from "./DeleteIncidentService";


export default(): DeleteIncidentController => {
  const incidentRepository = new IncidentRepository();
  const deleteIncidentService = new DeleteIncidentService(incidentRepository);
  const deleteIncidentController = new DeleteIncidentController(deleteIncidentService);

  return deleteIncidentController
}