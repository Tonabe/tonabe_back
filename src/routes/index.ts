import { Router } from "express"
import serviceRoutes from './service.route'
import goalRoutes from './goal.route'
import productRouter from "./product.route";
import employeeRoutes from './employee.route'

const router = Router();

router.use('/services', serviceRoutes)
router.use('/product', productRouter)
router.use('/goal', goalRoutes)
router.use('/employee', employeeRoutes)

export default router
