import { Router } from "express"
import serviceRoutes from './service.route'
import goalRoutes from './goal.route'
import productRouter from "./product.route";
import employeeRoutes from './employee.route'

const router = Router();

router.use('/servicos', serviceRoutes)
router.use('/produto', productRouter)
router.use('/meta', goalRoutes)
router.use('/funcionario', employeeRoutes)

export default router
