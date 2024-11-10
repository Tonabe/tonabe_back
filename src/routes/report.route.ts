import { Router } from "express"
import { findReportServiceByDateController } from "../controllers/report.controller"

const router = Router()

router.get('/', findReportServiceByDateController)

export default router