import { Request, Response } from 'express'
import { findReportProductByDateService, findReportServiceByDateService } from '../services/report.service'
import { findProductByIdService } from '../services/product.service'
import { findEmployeeById } from '../repositories/employee.repository'
import { findServicesByEmployeeService, findServicesByProductService } from '../services/service.service'
import product from '../entities/product.entity'
import employee from '../entities/employee.entity'
import { findGoalByIdProduct } from './goal.controller'
import { findGoalByIdProductService } from '../services/goal.service'

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

export const generateReportbyProduct = async (req: Request, res: Response) => {
    try {
        const idProduct = Number(req.body.idProduct);
        const endDate = new Date(req.body.endDate);
        const startDate = new Date(req.body.startDate);

        // Valida se as datas são válidas
        if (isNaN(startDate.getTime()) || isNaN(endDate.getTime())) {
            return res.status(400).json({ message: "Invalid startDate or endDate" });
        }

        // Valida se os IDs são válidos
        if (isNaN(idProduct)) {
            return res.status(400).json({ message: "Invalid or missing parameters" });
        }

        // Busca os dados do produto e relatórios
        const product_data = await findProductByIdService(idProduct);
        const service_data = await findServicesByProductService(idProduct);
        const goal_data = await findGoalByIdProductService(idProduct);

        // Filtra as metas para a data específica
        const goal_data_filtered = goal_data.filter(item => {
            const serviceStartDate = new Date(item.startDate);
            const serviceEndDate = new Date(item.endDate);
            // Compare as datas com getTime()
            return serviceStartDate.getTime() === startDate.getTime() && serviceEndDate.getTime() === endDate.getTime();
        });

        // Define a meta (goal)
        const goal_info = goal_data_filtered.length > 0 ? goal_data_filtered[0].goal : 0;

        // Filtra os serviços para as datas específicas
        const data = service_data.filter(item => {
            const serviceDate = new Date(item.date);
            return serviceDate >= startDate && serviceDate <= endDate;
        });

        // Calcula a quantidade total
        const quantity = data.reduce((total, item) => total + item.quantity, 0);

        // Calcula a média
        const percentage = Number(goal_info) === 0 ? 0 : ((Number(quantity) / Number(goal_info)) * 100).toFixed(2)
        
        // Retorna o relatório com os dados
        res.status(200).json({
            idProduct: idProduct,
            product: product_data?.name,
            goal: goal_info,
            percentage: percentage,
            quantity: quantity,
            service: data
        });

    } catch (error) {
        res.status(400).json({ message: error || "Bad Request" });
    }
};


export const generateReportbyProductAndEmployee = async (req: Request, res: Response) => {
    try {
        const idProduct = Number(req.body.idProduct);
        const idEmployee = Number(req.body.idEmployee);
        const endDate = new Date(req.body.endDate);
        const startDate = new Date(req.body.startDate);

        // Valida se as datas são válidas
        if (isNaN(startDate.getTime()) || isNaN(endDate.getTime())) {
            return res.status(400).json({ message: "Invalid startDate or endDate" });
        }

        // Valida se os IDs são válidos
        if (isNaN(idProduct) || isNaN(idEmployee)) {
            return res.status(400).json({ message: "Invalid or missing parameters" });
        }
    
        const product_data = await findProductByIdService(idProduct);
        const employee_data = await findEmployeeById(idEmployee);
        const service_data = await findServicesByEmployeeService(idEmployee);

        
        let filtered_service_data = service_data.filter(item => item?.idProduct === idProduct)

        filtered_service_data = filtered_service_data.filter(item => {
            const serviceDate = new Date(item.date);  // Converte item.date para Date
            return serviceDate >= startDate && serviceDate <= endDate;
          });

        const duration = filtered_service_data.reduce((total, item) => total + (item?.duration || 0), 0).toFixed(2);
        const total = filtered_service_data.reduce((total, item) => total + (item?.quantity || 0), 0);

        const media = Number(duration) > 0 ? (total / Number(duration)).toFixed(2) : "0.00";

        res.status(200).json({
            idProduct: idProduct, 
            product: product_data?.name,
            idEmployee: idEmployee,
            employee: employee_data?.name,
            duration: duration,
            quantity: total,
            media: media,
            service: filtered_service_data
        });
    } catch (error) {
        res.status(400).json({ message: error || "Bad Request" });
    }
}