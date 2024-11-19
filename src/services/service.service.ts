import { ServiceInterface } from "../interfaces/service.interface"
import { createService, deleteService, findAllServices, findServiceById, findServicesByEmployee, findServicesByProduct, updateService } from "../repositories/service.repository"

export const createServiceService = async (data: ServiceInterface) => {
    const dateFront = data.date

    const defaultDate = dateFront + "T00:00:00Z"
    data = { ...data, date: defaultDate }

    return createService(data)
}

export const findAllServicesService = async () => {
    return findAllServices()
}

export const findServiceByIdService = async (id: number) => {
    const service = await findServiceById(id)
    if (!service) throw new Error('Serviço não encontrado')

    return service
}

export const findServicesByEmployeeService = async (idEmployee: number) => {
    return await findServicesByEmployee(idEmployee)
}

export const findServicesByProductService = async (idProduct: number) => {
    return await findServicesByProduct(idProduct)
}

export const updateServiceService = async (id: number, data: ServiceInterface) => {
    const service = await findServiceById(id)
    if (!service) throw new Error('Serviço não encontrado')

    const dateFront = data.date

    const defaultDate = dateFront + "T00:00:00Z"
    data = { ...data, date: defaultDate }

    return await updateService(id, data)
}

export const deleteServiceService = async (id: number) => {
    const service = await findServiceById(id)
    if (!service) throw new Error('Serviço não encontrado')

    return await deleteService(id)
}