import { OngRepository } from "../../repositories/infra/OngRepository";
import { CreateOngController } from "./CreateOngController";
import { CreateOngService } from "./CreateOngService";


export default(): CreateOngController => {
  const ongRepository = new OngRepository();

  const createOngService = new CreateOngService(ongRepository)

  const createOngController = new CreateOngController(createOngService)

  return createOngController
}