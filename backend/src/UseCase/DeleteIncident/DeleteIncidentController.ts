import { Request, Response } from "express";
import { DeleteIncidentService } from "./DeleteIncidentService";


export class DeleteIncidentController {

  constructor(private deleteIncidentService: DeleteIncidentService){}

  async handler(request: Request, response: Response): Promise<Response> {
    const {id} = request.params
    const ong_id = request.headers.authorization

    await this.deleteIncidentService.execute(ong_id, id)

    return response.status(201).send()
    
  }
}