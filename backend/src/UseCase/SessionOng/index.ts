import { OngRepository } from "../../repositories/infra/OngRepository";
import { SessionOngController } from "./SessionOngController";
import { SessionOngService } from "./SessionOngService";




export default(): SessionOngController => { 
  const ongRepository = new OngRepository();
  const sessinoOngService = new SessionOngService(ongRepository);
  const sessionOngController = new SessionOngController(sessinoOngService);

  return sessionOngController
}