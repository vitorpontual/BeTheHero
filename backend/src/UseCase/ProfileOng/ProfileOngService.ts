import { OngRepository } from "../../repositories/infra/OngRepository";


export class ProfileOngService {
  constructor(private ongRepository: OngRepository){}

  async execute(): Promise
}