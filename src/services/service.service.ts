import { CreateServiceDTO, UpdateServiceDTO } from "../dtos/service.dto"
import { createService, deleteService, findAllServices, findServiceById, findServicesByEmployee, findServicesByProduct, updateService } from "../repositories/service.repository"

export const createServiceService = async (date: CreateServiceDTO) => {
    // Verifique se já existe um serviço semelhante (opcional, dependendo do contexto)
    // const existingservice = await findserviceById(data.id);
    // if (existingservice) throw new Error('Serviço já existe');

    return createService(date)
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

export const updateServiceService = async (id: number, date: UpdateServiceDTO) => {
    const service = await findServiceById(id)
    if (!service) throw new Error('Serviço não encontrado')

    return await updateService(id, date)
}

export const deleteServiceService = async (id: number) => {
    const service = await findServiceById(id)
    if (!service) throw new Error('Serviço não encontrado')

    return await deleteService(id)
};