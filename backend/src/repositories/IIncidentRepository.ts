import { ICreateIncidentDTO } from "../DTO/ICreateIncientDTO";
import { Incident } from "../entities/Incident";


export interface IIncidentRepository {
  create(data: ICreateIncidentDTO): Promise<Incident>;
  findIncident(id: string): Promise<Incident>;
  ListAllIncidentById(id: string): Promise<Incident[]>;
  deleteIncident(id: string): Promise<void>;
}