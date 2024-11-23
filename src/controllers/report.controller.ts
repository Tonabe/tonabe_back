import { Request, Response } from 'express'
import { findReportProductByDateService, findReportServiceByDateService } from '../services/report.service'
import { findProductByIdService } from '../services/product.service'

export const findReportServiceByDateController = async (req: Request, res: Response) => {
    try {
        const idEmployee = Number(req.body.idEmployee)
        const idProduct = Number(req.body.idProduct)
        const dateStart = req.body.dateStart
        const dateEnd = req.body.dateEnd

        const report = await findReportServiceByDateService(idEmployee, idProduct, dateStart, dateEnd)
        return res.status(201).json(report)

    } catch (error) {
        return res.status(400).json({ error })
    }
}

export const findReportProductByServiceController = async (req: Request, res: Response) => {
    try {
        const idProduct = Number(req.body.idProduct)
        const dateStart = req.body.dateStart
        const dateEnd = req.body.dateEnd
        const productName = await findProductByIdService(idProduct)

        const requestedReports = await findReportProductByDateService(idProduct, dateStart, dateEnd)
        const report = [productName?.name, requestedReports.reduce((acc, x) => acc + x.quantity, 0)]
        return res.status(201).json(report)

    } catch (error) {
        return res.status(400).json({ error })
    }
}