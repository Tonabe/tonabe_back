import { Router } from "express"
import servicoRoutes from './servico.route'

const router = Router();

router.use('/servicos', servicoRoutes)

export default router