import { GoalInterface } from '../interfaces/goal.interface'
import { createGoal, findAllGoals, findGoalById, findGoalByIdProduct, deleteGoal, updateGoal, findGoalByStartAndEndDate } from '../repositories/goal.repository' // Importa os métodos do repositório

export const createGoalService = async (data: GoalInterface) => {
  /*const Goal = await findGoalByStartAndEndDate({startDate: data.startDate, endDate: data.endDate}) 

  if (Goal) {
    throw new Error('Meta já existe') 
  }
  */
 
  const dateStartString = data.startDate
  const dateEndString = data.endDate

  function formatDate(x: string) {
    const [day, month, year] = x.split('/');
    return `${year}-${month}-${day}`;
  }
  const defaultStartDate = formatDate(dateStartString)+"T00:00:00Z"
  const defaultEndDate = formatDate(dateEndString)+"T00:00:00Z"
  data = {...data, startDate: defaultStartDate, endDate: defaultEndDate}
  return createGoal(data) 
}

export const findAllGoalsService = async () => {
  return findAllGoals() 
}

export const findGoalBydateService = async (data:{startDate: string, endDate: string}) => {
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

export const updateGoalService = async (id: number, data: GoalInterface) => {
  const Goal = await findGoalById(id) 

  if (!Goal) {
    throw new Error('Meta não encontrada') 
  }

  return updateGoal(id, data) 
}
