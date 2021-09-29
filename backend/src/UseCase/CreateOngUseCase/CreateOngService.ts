import { AppError } from "../../error/AppErrors"
import { IOngRepository } from "../../repositories/IOngRepository"

interface IOngRequest {
  name: string;
  email: string;
  whatsapp: string;
  city: string;
  uf: string;
}

export class CreateOngService {

  constructor(private ongRepository: IOngRepository){}
  async execute({name, email, whatsapp, city, uf}: IOngRequest){
    const ongAlreadyExists = await this.ongRepository.findByEmail(email)

    if(ongAlreadyExists){
      throw new AppError("Ong already exists")
    }

    const id = await this.ongRepository.create({
      name, email, whatsapp, city, uf
    })

    return id
  }
}