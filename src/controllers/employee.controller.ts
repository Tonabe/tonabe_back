import { Request, Response } from 'express' // Importa os tipos do Express
import { createEmployeeService, deleteEmployeeService, findAllEmployeeService, updateEmployeeService } from '../services/employee.service'

export const createEmployee = async (req: Request, res: Response) => {
  try {
    const employee = await createEmployeeService(req.body) 
    return res.status(201).json(employee) 
  } catch (error: any) {
    return res.status(400).json({ message: error.message }) 
  }
}

export const findAllEmployeeController = async (req: Request, res: Response) => {
  const employee = await findAllEmployeeService() 
  return res.status(200).json(employee) 
}

export const updateEmployee = async (req: Request, res: Response) => {
  try {
    const employee = await updateEmployeeService(Number(req.params.id), req.body) // Atualiza um usuário
    return res.status(200).json(employee) // Retorna o usuário atualizado
  } catch (error: any) {
    console.log(error)
    return res.status(400).json({ message: error.message }) // Retorna um erro
  }
}

export const deleteEmployee = async (req: Request, res: Response) => {
  try {
  await deleteEmployeeService(Number(req.params.id))
  return res.status(200).send();
  } catch (error: any) {
    return res.status(400).json({ message: error.message }) // Retorna um erro
}
}
