import { Request, Response } from "express";
import { CreateOngService } from "../../service/CreateOngService";


export class CreateOngController {
  constructor(private createOngService: CreateOngService){}
  async handler(request: Request, response: Response): Promise<Response>{
    const { name, email, whatsapp, city, uf} = request.body
    await this.createOngService.execute({name, email, whatsapp, city, uf})

    return response.status(201).json({
      "message": "Ong create complete!"
    })
  }
}