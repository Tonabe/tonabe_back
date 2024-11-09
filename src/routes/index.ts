import { Router } from "express"
import serviceRoutes from './service.route'
import goalRoutes from './goal.route'
import productRouter from './product.route'
import employeeRoutes from './employee.route'
import reportRoutes from './report.route'

const router = Router();

router.use('/service', serviceRoutes)
router.use('/product', productRouter)
router.use('/goal', goalRoutes)
router.use('/employee', employeeRoutes)
router.use('/report', reportRoutes)

export default router
