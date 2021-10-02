import { Request, Response } from "express";
import { ListIncidentsInProfileService } from "./ListIncidentsInProfileService";

export class ListIncidentsInProfileController {
  constructor(private listIncidentInProfileService: ListIncidentsInProfileService){}

  async handler(request: Request, response: Response): Promise<Response> {
    const ong_id = request.headers.authorization;

    const incidents = await this.listIncidentInProfileService.execute(ong_id)

    return response.status(200).json(incidents)
  }
}