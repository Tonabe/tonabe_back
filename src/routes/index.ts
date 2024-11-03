import { Router } from "express"
import servicoRoutes from './servico.route'
import metaRoutes from './meta.route'
import produtoRouter from "./produto.route";

const router = Router();

router.use('/servicos', servicoRoutes)
router.use('/produto', produtoRouter)
router.use('/meta', metaRouter)

export default router
