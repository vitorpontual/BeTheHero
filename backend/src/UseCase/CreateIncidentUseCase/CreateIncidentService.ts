import { Incident } from "../../entities/Incident";
import { IncidentRepository } from "../../repositories/infra/IncidentRespository";

interface IRequest {
  title: string;
  description: string;
  value: number;
  ong_id: string;
}

export class CreateIncidentService {
  constructor(private incidentRepository: IncidentRepository){}

  async execute({title, description, value, ong_id}: IRequest): Promise<Incident> {
    const incident = await this.incidentRepository.create({
      title, description, value, ong_id
    })


    return incident
  }
}