import { Router } from "express"
import servicoRoutes from './servico.route'
import metaRoutes from './meta.route'
import produtoRouter from "./produto.route";
import funcionarioRouter from "./funcionario.route";

const router = Router();

router.use('/servicos', servicoRoutes)
router.use('/produto', produtoRouter)
router.use('/meta', metaRouter)
router.use('/funcionario', funcionarioRouter)


export default router
