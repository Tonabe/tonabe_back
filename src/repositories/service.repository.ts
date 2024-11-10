import Service from '../entities/service.entity'
import { ServiceInterface } from '../interfaces/service.interface'

export const createService = async (data: ServiceInterface) => {
    const service = await Service.create({ data })
    return service
}

export const findAllServices = async () => {
    return Service.findMany()
}

export const findServiceById = async (id: number) => {
    return Service.findFirst({ where: { id }, include: { product: true, employee: true } })
}

export const findServiceByDateEmployeeProduct = async (
    idEmployee: number,
    idProduct: number,
    dateStart: string,
    dateEnd: string) => {

    return Service.findMany({
        where: {
            idEmployee: idEmployee,
            idProduct: idProduct,
            date: {
                gte: dateStart,
                lte: dateEnd
            },
        }, include: { product: true, employee: true }
    })
}

export const findServicesByEmployee = async (idEmployee: number) => {
    return Service.findMany({ where: { idEmployee } })
}

export const findServicesByProduct = async (idProduct: number) => {
    return Service.findMany({ where: { idProduct } })
}

export const updateService = async (id: number, data: ServiceInterface) => {
    return Service.update({ where: { id }, data })
}

export const deleteService = async (id: number) => {
    return Service.delete({ where: { id } })
}