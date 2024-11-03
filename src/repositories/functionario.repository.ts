import Funcionario from '../entities/functionario.entity' 

export const createFuncionario = async (data: { nome: string, dataDeCriacao: string }) => {
  return Funcionario.create({ data }) 
}

export const findAllFuncionario = async () => {
  return Funcionario.findMany() 
}

export const updateFuncionario = async (id: number, data: { nome: string}) => {
  return Funcionario.update({ where: { id }, data }) 
}

export const deletarFuncionarioRepository = async (id: number) => {
  return Funcionario.delete({ where: {id} }) 
}

export const findFuncionarioById = async (id: number) => {
  return Funcionario.findFirst({ where: { id } }) 
}