import { createGoal, findAllGoals, findGoalById, findGoalByIdProduct, deleteGoal, updateGoal, findGoalByStartAndEndDate } from '../repositories/goal.repository' // Importa os métodos do repositório

export const createGoalService = async (data: { goal: number, startDate: Date, endDate: Date, idProduct: number }) => {
  
  const Goal = await findGoalByStartAndEndDate({startDate: data.startDate, endDate: data.endDate}) 

  if (Goal) {
    throw new Error('Meta já existe') 
  }

  return createGoal(data) 
}

export const findAllGoalsService = async () => {
  return findAllGoals() 
}

export const findGoalBydateService = async (data:{startDate: Date, endDate: Date}) => {
    return findGoalByStartAndEndDate(data) 
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

export const updateGoalService = async (id: number, data: { goal: number, startDate: Date, endDate: Date, idProduct: number }) => {
  const Goal = await findGoalById(id) 

  if (!Goal) {
    throw new Error('Meta não encontrada') 
  }

  return updateGoal(id, data) 
}
