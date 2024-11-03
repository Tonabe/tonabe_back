import { createEmployee, deleteEmployeeRepository, findAllEmployee, findEmployeeById, updateEmployee } from '../repositories/employee.repository' // Importa os métodos do repositório

export const createEmployeeService = async (date: { nome: string, CreationDate: any }) => {
  
  date =  {...date, ...{CreationDate: new Date()}}
  return createEmployee(date) 
}

export const findAllEmployeeService = async () => {
  const employee = findAllEmployee() 
}

export const findEmployeeByIdService = async (id: number) => {
  return findEmployeeById(id) 
}

export const updateEmployeeService = async (id: number, date: { name: string }) => {
  const employee = await findEmployeeByIdService(id) 

  if (!employee) {
    throw new Error('Usuário não encontrado') 
  }

  return updateEmployee(id, date) 
}

export const deleteEmployeeService = async (id: number) => {
  const employee = await findEmployeeById(id) 

  if (!employee) {
    throw new Error('Usuário não encontrado') 
  }

  return deleteEmployeeRepository(id);
  
}