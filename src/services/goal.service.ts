import { GoalInterface } from '../interfaces/goal.interface'
import { createGoal, findAllGoals, findGoalById, findGoalByIdProduct, deleteGoal, updateGoal, findGoalByStartAndEndDate } from '../repositories/goal.repository' // Importa os métodos do repositório

export const createGoalService = async (data: GoalInterface) => {
  const dateStartFront = data.startDate
  const dateEndFront = data.endDate

  const defaultStartDate = dateStartFront + "T00:00:00Z"
  const defaultEndDate = dateEndFront + "T00:00:00Z"
  data = { ...data, startDate: defaultStartDate, endDate: defaultEndDate }
  return createGoal(data)
}

export const findAllGoalsService = async () => {
  return findAllGoals()
}

export const findGoalBydateService = async ( startDate: string, endDate: string ) => {
  const dateStartFront = startDate
  const dateEndFront = endDate

  const defaultStartDate = dateStartFront + "T00:00:00Z"
  const defaultEndDate = dateEndFront + "T00:00:00Z" 
  return findGoalByStartAndEndDate(defaultStartDate, defaultEndDate)
}

export const findGoalByIdService = async (id: number) => {
  return findGoalById(id)
}

export const findGoalByIdProductService = async (idProduct: number) => {
  return findGoalByIdProduct(idProduct)
}

export const deleteGoalService = async (id: number) => {
  const Goal = await findGoalById(id)

  if (!Goal) {
    throw new Error(`Meta com o ID "${id}" não encontrado`)
  }

  return deleteGoal(id)
}

export const updateGoalService = async (id: number, data: GoalInterface) => {
  const Goal = await findGoalById(id)
  if (!Goal) {
    throw new Error('Meta não encontrada')
  }
  const dateStartFront = data.startDate
  const dateEndFront = data.endDate

  const defaultStartDate = dateStartFront + "T00:00:00Z"
  const defaultEndDate = dateEndFront + "T00:00:00Z"
  data = { ...data, startDate: defaultStartDate, endDate: defaultEndDate}

  return updateGoal(id, data)
}
