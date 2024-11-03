import { Request, Response } from 'express' // Importa os tipos do Express
import { createFuncionarioService, deletarFuncionarioService, findAllFuncionarioService, updateFuncionarioService } from '../services/funcionario.service'

export const createFuncionario = async (req: Request, res: Response) => {
  try {
    const funcionario = await createFuncionarioService(req.body) 
    return res.status(201).json(funcionario) 
  } catch (error: any) {
    return res.status(400).json({ message: error.message }) 
  }
}

export const findAllFuncionarioController = async (req: Request, res: Response) => {
  const funcionario = await findAllFuncionarioService() 
  return res.status(200).json(funcionario) 
}

export const updateFuncionario = async (req: Request, res: Response) => {
  try {
    const funcionario = await updateFuncionarioService(Number(req.params.id), req.body) // Atualiza um usuário
    return res.status(200).json(funcionario) // Retorna o usuário atualizado
  } catch (error: any) {
    console.log(error)
    return res.status(400).json({ message: error.message }) // Retorna um erro
  }
}

export const deletarFuncionario = async (req: Request, res: Response) => {
  try {
  await deletarFuncionarioService(Number(req.params.id))
  return res.status(200).send();
  } catch (error: any) {
    return res.status(400).json({ message: error.message }) // Retorna um erro
}
}
