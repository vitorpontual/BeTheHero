import { Incident } from "../../entities/Incident";
import { IncidentRepository } from "../../repositories/infra/IncidentRespository";


export class ListIncidentsInProfileService {
  constructor(private incidentsRepository: IncidentRepository){}

  async execute(ong_id: string): Promise<Incident[]>{
    const allIncidents = await this.incidentsRepository.ListAllIncidentById(ong_id)

    let format = []

    allIncidents.map(incident => {
      format.push({ title: incident.title, description: incident.description, value: incident.value, id: incident.id})
    })

    return format
    
  }
}