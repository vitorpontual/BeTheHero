import { NONAME } from "dns";
import { AppError } from "../../error/AppErrors";
import { OngRepository } from "../../repositories/infra/OngRepository";


export class SessionOngService {
  constructor(private ongRepository: OngRepository){}

  async execute(id: string){
    const ong = await this.ongRepository.findById(id)

    if(!ong){
      throw new AppError('No ONG found with this ID', 404)
    }

  
    return {
      name: ong.name,
      email: ong.email,
      id: ong.id,
      whatsapp: ong.whatsapp
    }
  }
}