import { EmployeeInterface } from '../interfaces/employee.interface'
import { createEmployee, deleteEmployeeRepository, findAllEmployee, findEmployeeById, updateEmployee } from '../repositories/employee.repository' // Importa os métodos do repositório

export const createEmployeeService = async (data: EmployeeInterface) => {
  const dateString = data.hiringDate
  function formatDate(x: string) {
    const [day, month, year] = x.split('/');
    return `${year}-${month}-${day}`;
  }
  const defaultDate = formatDate(dateString)+"T00:00:00Z"
  data = {...data, hiringDate: defaultDate}
  return createEmployee(data) 
}

export const findAllEmployeeService = async () => {
  return findAllEmployee() 
}

export const findEmployeeByIdService = async (id: number) => {
  return findEmployeeById(id) 
}

export const updateEmployeeService = async (id: number, data: EmployeeInterface) => {
  const employee = await findEmployeeByIdService(id) 

  if (!employee) {
    throw new Error('Employee not found') 
  }

  return updateEmployee(id, data) 
}

export const deleteEmployeeService = async (id: number) => {
  const employee = await findEmployeeById(id) 

  if (!employee) {
    throw new Error('Employee not found') 
  }

  return deleteEmployeeRepository(id);
  
}