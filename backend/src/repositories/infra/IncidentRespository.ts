import { getRepository, Repository } from "typeorm";
import { ICreateIncidentDTO } from "../../DTO/ICreateIncientDTO";
import { Incident } from "../../entities/Incident";
import { IIncidentRepository } from "../IIncidentRepository";


export class IncidentRepository implements IIncidentRepository {
  private repository: Repository<Incident>
  public constructor(){
    this.repository = getRepository(Incident)
  }
  async create(data: ICreateIncidentDTO): Promise<void> {
    const incident = this.repository.create({
      ...data
    })

    await this.repository.save(incident)
  }
  async ListAllIncidentById(id: string): Promise<Incident[]> {
    const allIncident = await this.repository.find({
      where: {ong_id: id}, relations: ['ongs']
    })

    return allIncident
  }

  async deleteIncident(id: string): Promise<void> {
    await this.repository.delete({id})
  }
  
}