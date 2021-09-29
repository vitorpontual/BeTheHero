import { Request, Response } from "express";
import { OngRepository } from "../../repositories/infra/OngRepository";
import { SessionOngService } from "./SessionOngService";


export class SessionOngController {
  constructor(private sessionOngService: SessionOngService){}

  async handler(request: Request, response: Response): Promise<Response> {
    const { id } = request.body

    const ong = await this.sessionOngService.execute(id)

    return response.status(200).json(ong)
  }

}