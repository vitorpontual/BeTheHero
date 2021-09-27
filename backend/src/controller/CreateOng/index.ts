
import { OngRepository } from "../../repositories/infra/OngRepository";
import { CreateOngService } from "../../service/CreateOngService";
import { CreateOngController } from "./CreateOngController";


export default(): CreateOngController => {
  const ongRepository = new OngRepository();

  const createOngService = new CreateOngService(ongRepository)

  const createOngController = new CreateOngController(createOngService)

  return createOngController
}