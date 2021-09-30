import { ICreateIncidentDTO } from "../DTO/ICreateIncientDTO";
import { Incident } from "../entities/Incident";


export interface IIncidentRepository {
  create(data: ICreateIncidentDTO): Promise<void>;
  ListAllIncidentById(id: string): Promise<Incident[]>;
  deleteIncident(id: string): Promise<void>;
}