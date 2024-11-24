import { Request, Response } from 'express'
import {
    createServiceService,
    deleteServiceService,
    findAllServicesService,
    findServiceByIdService,
    findServicesByEmployeeService,
    findServicesByProductService,
    updateServiceService
} from '../services/service.service'

export const createService = async (req: Request, res: Response) => {
    try {
        const service = await createServiceService(req.body)
        return res.status(201).json(service)
    } catch (error) {
        return res.status(400).json({ error })
    }
}

export const findAllServices = async (req: Request, res: Response) => {
    const services = await findAllServicesService()
    return res.json(services)
}

export const findServiceById = async (req: Request, res: Response) => {
    try {
        const id = Number(req.params.id)
        if (isNaN(id)) {
            return res.status(400).json({ message: 'ID inválido' })
        }
        
        const service = await findServiceByIdService(id)
        return res.status(200).json(service)
    } catch (error) {
        return res.status(400).json({ error })
    }
}

export const updateService = async (req: Request, res: Response) => {
    try {
        const id = Number(req.params.id)
        if (isNaN(id)) {
            return res.status(400).json({ message: 'ID inválido' })
        }
        
        const service = await updateServiceService(id, req.body)
        return res.status(200).json(service)
    } catch (error) {
        return res.status(400).json({ error })
    }
}

export const deleteService = async (req: Request, res: Response) => {
    try {
        const id = Number(req.params.id)
        if (isNaN(id)) {
            return res.status(400).json({ message: 'ID inválido' })
        }
        
        const service = await deleteServiceService(id)
        return res.status(200).json(service)
    } catch (error) {
        return res.status(400).json({ error })
    }
}

export const findServicesByEmployee = async (req: Request, res: Response) => {
    try {
        const idEmployee = Number(req.params.id)
        if (isNaN(idEmployee)) {
            return res.status(400).json({ message: 'ID do funcionário inválido' })
        }
        const services = await findServicesByEmployeeService(idEmployee)
        return res.status(200).json(services)
    } catch (error) {
        return res.status(400).json({ error })
    }
}

export const findServicesByProduct = async (req: Request, res: Response) => {
    try {
        const idProduct = Number(req.params.id)
        if (isNaN(idProduct)) {
            return res.status(400).json({ message: 'ID do Product inválido' })
        }
    
        const services = await findServicesByProductService(idProduct)
        return res.status(200).json(services)
    } catch (error) {
        return res.status(400).json({ error })
    }
}