import { Request, Response } from 'express'
import { createEmployeeService, deleteEmployeeService, findAllEmployeeService, findEmployeeByIdService, updateEmployeeService } from '../services/employee.service'

export const createEmployee = async (req: Request, res: Response) => {
  try {
    const { name } = req.body

    const nameRegex = /^[a-zA-ZÀ-ÿ\s]+$/u

    if (!name || typeof name !== 'string' || name.trim().length === 0) {
      return res.status(400).json({ message: 'Nome inválido! Certifique-se de que o campo seja uma string não vazia.' })
    }

    if (!nameRegex.test(name.trim())) {
      return res.status(400).json({ message: 'Nome inválido! Use apenas letras e espaços, sem números ou caracteres especiais.' })
    }

    const employees = await findAllEmployeeService()
    const isDuplicate = employees.some((employee: any) => employee.name.toUpperCase() === name.trim().toUpperCase())

    if (isDuplicate) {
      return res.status(400).json({ message: 'Funcionário já cadastrado!' })
    }

    const employee = await createEmployeeService({ ...req.body, name: name.trim() })
    return res.status(201).json(employee)

  } catch (error: any) {
    return res.status(500).json({ message: 'Erro ao criar funcionário!', error: error.message })
  }
}

export const findAllEmployeeController = async (req: Request, res: Response) => {
  try {
    const employees = await findAllEmployeeService()

    if (!employees || employees.length === 0) {
      return res.status(404).json({ message: 'Nenhum funcionário encontrado.' })
    }

    return res.status(200).json(employees)
  } catch (error: any) {
    return res.status(500).json({ message: 'Erro ao buscar funcionários.', error: error.message })
  }
}


export const updateEmployee = async (req: Request, res: Response) => {
  try {
    const { name, hiringDate } = req.body
    const employeeId = Number(req.params.id)

    const nameRegex = /^[a-zA-ZÀ-ÿ\s]+$/u

    if (!name || typeof name !== 'string' || name.trim().length === 0) {
      return res.status(400).json({ message: 'Nome inválido! Certifique-se de que o campo seja uma string não vazia.' })
    }

    if (!nameRegex.test(name.trim())) {
      return res.status(400).json({ message: 'Nome inválido! Use apenas letras e espaços, sem números ou caracteres especiais.' })
    }

    if (!hiringDate) {
      return res.status(400).json({ message: 'Data de contratação é obrigatória.' })
    }

    const employees = await findAllEmployeeService()

    const isDuplicate = employees.some((employee: any) =>
      employee.id !== employeeId &&
      employee.name.toUpperCase() === name.trim().toUpperCase()
    )

    if (isDuplicate) {
      return res.status(400).json({
        message: 'Essa atualização não pode ser realizada, pois o nome já está em uso por outro funcionário.'
      })
    }

    const employee = await updateEmployeeService(employeeId, { ...req.body, name: name.trim() })
    return res.status(200).json(employee)

  } catch (error: any) {
    console.log(error)
    return res.status(500).json({ message: 'Erro ao atualizar funcionário.', error: error.message })
  }
}


export const deleteEmployee = async (req: Request, res: Response) => {
  try {
    const employeeId = Number(req.params.id)

    const employee = await findEmployeeByIdService(employeeId)

    if (!employee) {
      return res.status(404).json({ message: 'Funcionário não encontrado.' })
    }

    await deleteEmployeeService(employeeId)
    return res.status(200).send()
  } catch (error: any) {
    console.log(error)
    return res.status(500).json({ message: 'Erro ao excluir funcionário.', error: error.message })
  }
}

