import { EmployeeInterface } from '../interfaces/employee.interface'
import { createEmployee, deleteEmployeeRepository, findAllEmployee, findEmployeeById, updateEmployee } from '../repositories/employee.repository' // Importa os métodos do repositório

export const createEmployeeService = async (data: EmployeeInterface) => {
  const dateFront = data.hiringDate

  const defaultDate = dateFront+"T00:00:00Z"
  data = {...data, hiringDate: defaultDate}
  return createEmployee(data) 
}

export const findAllEmployeeService = async () => {
  const employees = await findAllEmployee()

  if (!employees || !Array.isArray(employees)) {
    throw new Error("Erro ao buscar os funcionários.")
  }

  function formatDate(dateString: string): string {
    const date = new Date(dateString)
    date.setUTCHours(0, 0, 0, 0)
    const year = date.getUTCFullYear()
    const month = String(date.getUTCMonth() + 1).padStart(2, "0")
    const day = String(date.getUTCDate()).padStart(2, "0")
    return `${year}-${month}-${day}`
  }

  const formattedEmployees = employees.map(employee => {
    if (employee.hiringDate) {
      return {
        ...employee,
        hiringDate: formatDate(String(employee.hiringDate))
      };
    }
    return employee
  });

  return formattedEmployees
};

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