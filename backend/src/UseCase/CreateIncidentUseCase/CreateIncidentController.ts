import { Request, Response } from "express";
import { CreateIncidentService } from "./CreateIncidentService";


export class CreateIncidentController {
  constructor(private createInciddentService: CreateIncidentService){}

  async handler(request: Request, response: Response): Promise<Response> {
    const { title, description, value } = request.body

    const ongId = request.headers.authorization

    await this.createInciddentService.execute({title, description, value, ong_id: ongId})

    return response.status(201).send()
  }
}