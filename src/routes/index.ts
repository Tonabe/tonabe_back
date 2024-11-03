import { Router } from "express"
import servicoRoutes from './servico.route'
import metaRoutes from './meta.route'
import produtoRouter from "./produto.route";
import funcionarioRoutes from './funcionario.route'

const router = Router();

router.use('/servicos', servicoRoutes)
router.use('/produto', produtoRouter)
router.use('/meta', metaRouter)
router.use('/funcionario', funcionarioRoutes)


export default router
