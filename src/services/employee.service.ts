import { EmployeeInterface } from '../interfaces/employee.interface'
import { createEmployee, deleteEmployeeRepository, findAllEmployee, findEmployeeById, updateEmployee } from '../repositories/employee.repository' // Importa os métodos do repositório

const formatDate = (dateString: string): string => {
  const date = new Date(dateString)
  if (isNaN(date.getTime())) {
    throw new Error(`Data inválida encontrada: ${dateString}`)
  }
  date.setUTCHours(0, 0, 0, 0)
  const year = date.getUTCFullYear()
  const month = String(date.getUTCMonth() + 1).padStart(2, "0")
  const day = String(date.getUTCDate()).padStart(2, "0")
  return `${year}-${month}-${day}`
}

export const createEmployeeService = async (data: EmployeeInterface) => {
  try {
    const { hiringDate } = data
    if (!hiringDate) throw new Error("Data de contratação é obrigatória.")

    const defaultDate = hiringDate + "T00:00:00Z"
    const formattedData = { ...data, hiringDate: defaultDate }
    return await createEmployee(formattedData)
  } catch (error: any) {
    throw new Error(`Erro ao criar funcionário: ${error.message}`)
  }
}

export const findAllEmployeeService = async () => {
  try {
    const employees = await findAllEmployee()

    if (!employees) {
      throw new Error("Nenhum funcionário encontrado.")
    }

    if (!Array.isArray(employees)) {
      throw new Error("O retorno dos funcionários não está no formato esperado.")
    }

    return employees.map((employee: any) => {
      try {
        if (employee.hiringDate) {
          return {
            ...employee,
            hiringDate: formatDate(String(employee.hiringDate))
          }
        }
        return employee
      } catch (error: any) {
        console.error(`Erro ao formatar funcionário com ID ${employee.id}: ${error.message}`)
        throw new Error("Erro ao formatar a lista de funcionários.")
      }
    })
  } catch (error: any) {
    throw new Error(`Erro ao buscar funcionários: ${error.message}`)
  }
}

export const findEmployeeByIdService = async (id: number) => {
  try {
    const employee = await findEmployeeById(id)
    if (!employee) {
      throw new Error('Funcionário não encontrado.')
    }
    return employee
  } catch (error: any) {
    throw new Error(`Erro ao buscar funcionário: ${error.message}`)
  }
}

export const updateEmployeeService = async (id: number, data: EmployeeInterface) => {
  try {
    const employee = await findEmployeeByIdService(id)

    const { hiringDate } = data
    if (!hiringDate) throw new Error("Data de contratação é obrigatória.")

    const defaultDate = hiringDate + "T00:00:00Z"
    const formattedData = { ...data, hiringDate: defaultDate }

    return await updateEmployee(id, formattedData)
  } catch (error: any) {
    throw new Error(`Erro ao atualizar funcionário: ${error.message}`)
  }
}

export const deleteEmployeeService = async (id: number) => {
  try {
    const employee = await findEmployeeById(id)
    if (!employee) {
      throw new Error('Funcionário não encontrado.')
    }

    return await deleteEmployeeRepository(id)
  } catch (error: any) {
    throw new Error(`Erro ao excluir funcionário: ${error.message}`)
  }
}
