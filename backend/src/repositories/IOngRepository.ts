import { ICreateOngDTO } from "../DTO/ICreateOngDTO";
import { Ong } from "../entities/Ong";

export interface IOngRepository{
  create(data: ICreateOngDTO): Promise<Ong>;
  findByEmail(email: string): Promise<Ong>;
  findById(id:string): Promise<Ong>;
}