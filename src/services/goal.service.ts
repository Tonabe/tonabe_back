import { createGoal, findAllGoals, findGoalByDate, findGoalById, findGoalByIdProduct, deleteGoal, updateGoal } from '../repositories/goal.repository' // Importa os métodos do repositório

export const createGoalService = async (date: { goal: number, date: Date, idProduct: number }) => {
  const Goal = await findGoalByDate(date.date) 

  if (Goal) {
    throw new Error('Meta já existe') 
  }

  return createGoal(date) 
}

export const findAllGoalsService = async () => {
  return findAllGoals() 
}

export const findGoalBydateService = async (date: Date) => {
    return findGoalByDate(Date)
}

export const findGoalByIdService = async (id: number) => {
    return findGoalById(id)
}

export const findGoalByIdProductService = async (idProduct: number) => {
    return findGoalByIdProduct(idProduct)
}

export const deleteGoalService = async (id: number) => {
    const Goal = await findGoalById(id)

    if(!Goal){
        throw new Error(`Meta com o ID "${id}" não encontrado`)
    }

    return deleteGoal(id)
}

export const updateGoalService = async (id: number, date: { goal: number, date: Date, idProduct: number }) => {
  const Goal = await findGoalById(id) 

  if (!Goal) {
    throw new Error('Meta não encontrada') 
  }

  return updateGoal(id, date) 
}
