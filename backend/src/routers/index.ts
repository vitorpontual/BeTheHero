import { Router } from 'express'
import { ongRouter as ong} from "./ong"
import { incidentRouter as incident} from './incident'

const router = Router();

router.use("/ongs", ong)
router.use("/incidents", incident)
export { router }