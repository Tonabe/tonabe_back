import { Request, Response } from 'express'
import { findReportServiceByDateService } from '../services/report.service'

export const findReportServiceByDateController = async (req: Request, res: Response) => {
    try {
        const idEmployee = Number(req.body.employee)
        const idProduct = Number(req.body.product)
        const dateSart = req.body.dateStart
        const dateEnd = req.body.dateEnd
        
        const report = await findReportServiceByDateService(idEmployee, idProduct, dateSart, dateEnd)
        return res.status(201).json(report)
    } catch (error) {
        return res.status(400).json({ error })
    }
}
