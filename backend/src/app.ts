import "express-async-errors"
import express, { NextFunction, Request, Response } from 'express';
import cors from 'cors'

import "./database"
import {router} from './routers'
import { AppError } from "./error/AppErrors";

const app = express();

app.use(cors())
app.use(express.json())
app.use(router)

app.use(
  (err: Error, request: Request, response: Response, next: NextFunction) => {
    if( err instanceof AppError){ 
      return response.status(err.statusCode).json(err.message)
    } 
    return response.status(500).json({
      status: "error",
      message: `Internal server error - ${err.message}`
    })
  }
)




export { app };