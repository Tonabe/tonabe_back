import { Router } from "express"
import { findReportProductByServiceController, findReportServiceByDateController, generateReportbyProduct, generateReportbyProductAndEmployee } from "../controllers/report.controller"

const router = Router()

router.get('/', findReportServiceByDateController)
router.get('/product', findReportProductByServiceController)
router.post('/employee', generateReportbyProductAndEmployee)
router.post('/product', generateReportbyProduct)

export default router