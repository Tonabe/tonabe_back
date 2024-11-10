import { Router } from "express"
import { findReportProductByServiceController, findReportServiceByDateController } from "../controllers/report.controller"

const router = Router()

router.get('/', findReportServiceByDateController)
router.get('/product', findReportProductByServiceController)

export default router