import { createFuncionario, deletarFuncionarioRepository, findAllFuncionario, findFuncionarioById, updateFuncionario } from '../repositories/functionario.repository' // Importa os métodos do repositório

export const createFuncionarioService = async (data: { nome: string, dataDeCriacao: any }) => {
  
  data =  {...data, ...{dataDeCriacao: new Date()}}
  return createFuncionario(data) 
}

export const findAllFuncionarioService = async () => {
  const funcionario = findAllFuncionario() 
}

export const findFuncionarioByIdService = async (id: number) => {
  return findFuncionarioById(id) 
}

export const updateFuncionarioService = async (id: number, data: { nome: string }) => {
  const funcionario = await findFuncionarioByIdService(id) 

  if (!funcionario) {
    throw new Error('Usuário não encontrado') 
  }

  return updateFuncionario(id, data) 
}

export const deletarFuncionarioService = async (id: number) => {
  const funcionario = await findFuncionarioById(id) 

  if (!funcionario) {
    throw new Error('Usuário não encontrado') 
  }

  return deletarFuncionarioRepository(id);
  
}