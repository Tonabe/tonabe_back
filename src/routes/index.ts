import { Router } from "express"
import servicoRoutes from './servico.route'
import produtoRouter from "./produto.route";

const router = Router();

router.use('/servicos', servicoRoutes)
router.use('/produto', produtoRouter)

export default router