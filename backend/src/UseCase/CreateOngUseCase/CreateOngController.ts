import { Request, Response } from "express";
import { CreateOngService } from "./CreateOngService";


export class CreateOngController {
  constructor(private createOngService: CreateOngService){}
  async handler(request: Request, response: Response): Promise<Response>{
    const { name, email, whatsapp, city, uf} = request.body
    const ongId = await this.createOngService.execute({name, email, whatsapp, city, uf})

    return response.status(201).json(ongId)
  }
}