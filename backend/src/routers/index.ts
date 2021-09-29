import { Router } from 'express'
import { ongRouter as ong} from "./ong"

const router = Router();

router.use("/ongs", ong)

export { router }