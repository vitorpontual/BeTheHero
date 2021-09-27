import { Router } from 'express'
import { authRouter } from './authentication';
import { ongRouter as ong} from "./ong"

const router = Router();

router.use("/session", authRouter)
router.use("/ong", ong)

export { router }