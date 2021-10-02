import { AppError } from "../../error/AppErrors";
import { IncidentRepository } from "../../repositories/infra/IncidentRespository";


export class DeleteIncidentService { 
  constructor(private incidentRepository: IncidentRepository){}

  async execute(ong_id: string, id: string): Promise<void> {
    const incident = await this.incidentRepository.findIncident(id)

    if( incident.ong_id !== ong_id){
      throw new AppError('Operation not permitted', 401)
    }

    await this.incidentRepository.deleteIncident(id)
  }
}