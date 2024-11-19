import { Request, Response } from 'express'
import { createEmployeeService, deleteEmployeeService, findAllEmployeeService, updateEmployeeService } from '../services/employee.service'

export const createEmployee = async (req: Request, res: Response) => {
  try {
    const employees = await findAllEmployeeService()
    const isDuplicate = employees.some((employee: any) => employee.name.toUpperCase() === req.body.name.toUpperCase())

    if (isDuplicate) {
      return res.status(400).json({ message: "Funcionário já cadastrado!" })
    }

    const employee = await createEmployeeService(req.body)
    return res.status(201).json(employee)

  } catch (error: any) {
    return res.status(500).json({ message: "Erro ao criar funcionário!", error: error.message })
  }
}

export const findAllEmployeeController = async (req: Request, res: Response) => {
  const employee = await findAllEmployeeService()
  return res.status(200).json(employee)
}

export const updateEmployee = async (req: Request, res: Response) => {
  try {
    const employees = await findAllEmployeeService()
    const isDuplicate = employees.some((employee: any) => employee.name.toUpperCase() === req.body.name.toUpperCase() && employee.hiringDate === req.body.hiringDate)

    if (isDuplicate) {
      return res.status(400).json({ message: "Essa atualização não pode ser realizada pois ira gerar duplicidade de funcionarios!" })
    }

    const employee = await updateEmployeeService(Number(req.params.id), req.body)
    return res.status(200).json(employee)
  } catch (error: any) {
    console.log(error)
    return res.status(400).json({ message: error.message })
  }
}

export const deleteEmployee = async (req: Request, res: Response) => {
  try {
    await deleteEmployeeService(Number(req.params.id))
    return res.status(200).send()
  } catch (error: any) {
    return res.status(400).json({ message: error.message })
  }
}
