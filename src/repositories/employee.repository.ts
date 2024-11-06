import Employee from '../entities/employee.entity' 
import { EmployeeInterface } from '../interfaces/employee.interface'

export const createEmployee = async (data: EmployeeInterface) => {
  return Employee.create({ data }) 
}

export const findAllEmployee = async () => {
  return Employee.findMany() 
}

export const updateEmployee = async (id: number, data: EmployeeInterface) => {
  return Employee.update({ where: { id }, data }) 
}

export const deleteEmployeeRepository = async (id: number) => {
  return Employee.delete({ where: {id} }) 
}

export const findEmployeeById = async (id: number) => {
  return Employee.findFirst({ where: { id } }) 
}