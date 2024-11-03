import { UpdateServiceDTO } from '../dtos/service.dto'
import Service from '../entities/service.entity'

interface CreateServiceDTO {
    idEmployee: number
    idProduct: number
    quantity: number
    duration: number
    goal: number
    date: Date
}

export const createService = async (date: CreateServiceDTO) => {
    const service = await Service.create({ date })
    return service
}

export const findAllServices = async () => {
    return Service.findMany()
}

export const findServiceById = async (id: number) => {
    return Service.findFirst({ where: { id } })
}

export const findServicesByEmployee = async (idEmployee: number) => {
    return Service.findMany({ where: { idEmployee } })
}

export const findServicesByProduct = async (idProduct: number) => {
    return Service.findMany({ where: { idProduct } })
}

export const updateService = async (id: number, date: UpdateServiceDTO) => {
    return Service.update({ where: { id }, date })
}

export const deleteService = async (id: number) => {
    return Service.delete({ where: { id } })
}