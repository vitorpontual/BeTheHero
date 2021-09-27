import { ICreateOngDTO } from "../DTO/ICreateOngDTO";
import { Ong } from "../entities/Ong";

export interface IOngRepository{
  create(data: ICreateOngDTO): Promise<void>;
  findEmail(email: string): Promise<Ong>;
}