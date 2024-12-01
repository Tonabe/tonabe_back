import { GoalInterface } from '../interfaces/goal.interface'
import { createGoal, findAllGoals, findGoalById, findGoalByIdProduct, deleteGoal, updateGoal, findGoalByStartAndEndDate } from '../repositories/goal.repository' // Importa os métodos do repositório

export const createGoalService = async (data: GoalInterface) => {
  try {
    const defaultStartDate = data.startDate + "T00:00:00Z"
    const defaultEndDate = data.endDate + "T00:00:00Z"
    data = { ...data, startDate: defaultStartDate, endDate: defaultEndDate }
    return await createGoal(data)
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new Error('Erro ao criar meta: ' + error.message)
    }
    throw new Error('Erro desconhecido ao criar meta')
  }
}

export const findAllGoalsService = async () => {
  try {
    return await findAllGoals()
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new Error('Erro ao buscar todas as metas: ' + error.message)
    }
    throw new Error('Erro desconhecido ao buscar todas as metas')
  }
}

export const findGoalBydateService = async (startDate: string, endDate: string) => {
  try {
    const defaultStartDate = startDate + "T00:00:00Z"
    const defaultEndDate = endDate + "T00:00:00Z"
    return await findGoalByStartAndEndDate(defaultStartDate, defaultEndDate)
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new Error('Erro ao buscar meta por data: ' + error.message)
    }
    throw new Error('Erro desconhecido ao buscar meta por data')
  }
}

export const findGoalByIdService = async (id: number) => {
  try {
    return await findGoalById(id)
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new Error(`Erro ao buscar meta com ID ${id}: ` + error.message)
    }
    throw new Error(`Erro desconhecido ao buscar meta com ID ${id}`)
  }
}

export const findGoalByIdProductService = async (idProduct: number) => {
  try {
    return await findGoalByIdProduct(idProduct)
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new Error(`Erro ao buscar meta pelo ID do produto ${idProduct}: ` + error.message)
    }
    throw new Error(`Erro desconhecido ao buscar meta pelo ID do produto ${idProduct}`)
  }
}

export const deleteGoalService = async (id: number) => {
  try {
    const Goal = await findGoalById(id)
    if (!Goal) throw new Error(`Meta com o ID "${id}" não encontrado`)
    return await deleteGoal(id)
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new Error('Erro ao excluir meta: ' + error.message)
    }
    throw new Error('Erro desconhecido ao excluir meta')
  }
}

export const updateGoalService = async (id: number, data: GoalInterface) => {
  try {
    const Goal = await findGoalById(id)
    if (!Goal) throw new Error('Meta não encontrada')

    const defaultStartDate = data.startDate + "T00:00:00Z"
    const defaultEndDate = data.endDate + "T00:00:00Z"
    data = { ...data, startDate: defaultStartDate, endDate: defaultEndDate }

    return await updateGoal(id, data)
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new Error('Erro ao atualizar meta: ' + error.message)
    }
    throw new Error('Erro desconhecido ao atualizar meta')
  }
}


