import { getRepository, Repository } from "typeorm";
import { ICreateIncidentDTO } from "../../DTO/ICreateIncientDTO";
import { Incident } from "../../entities/Incident";
import { IIncidentRepository } from "../IIncidentRepository";


export class IncidentRepository implements IIncidentRepository {
  private repository: Repository<Incident>
  
  public constructor(){
    this.repository = getRepository(Incident)
  }
  async create({title, id, description, value, ong_id}: ICreateIncidentDTO): Promise<Incident> {
    const incident = this.repository.create({
      title, description, value, ong_id, id
    })

    await this.repository.save(incident)

    return incident
  }
  async ListAllIncidentById(ong_id: string): Promise<Incident[]> {
    const allIncident = await this.repository.find({ong_id})

    return allIncident
  }

  async deleteIncident(id: string): Promise<void> {
    await this.repository.delete({id})
  }

  async findIncident(id: string): Promise<Incident> {
    const incident = await this.repository.findOne(id)

    return incident
  }
  
}