import { getRepository, Repository } from "typeorm";
import { ICreateOngDTO } from "../../DTO/ICreateOngDTO";
import { Ong } from "../../entities/Ong";
import { IOngRepository } from "../IOngRepository";


export class OngRepository implements IOngRepository {
  private repository: Repository<Ong>
  
  public constructor() {
    this.repository = getRepository(Ong)
  }
  

  async create({name, email, whatsapp, city, uf, id}: ICreateOngDTO): Promise<void> {
    const ong = this.repository.create({
      name,
      email,
      whatsapp,
      city,
      uf,
      id
    })

    await this.repository.save(ong)
  }

  async findEmail(email:string): Promise<Ong>{
    const ong = await this.repository.findOne({ email})

    return ong
  }
}