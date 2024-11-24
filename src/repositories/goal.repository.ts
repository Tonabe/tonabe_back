import Goal from '../entities/goal.entity'
import { GoalInterface } from '../interfaces/goal.interface'

export const createGoal = async (data: GoalInterface) => {
  return Goal.create({ data })
}

export const findAllGoals = async () => {
  return Goal.findMany()
}

export const findGoalByStartDate = async (startDate: string) => {
  return Goal.findFirst({ where: { startDate } })
}

export const findGoalByEndDate = async (endDate: string) => {
  return Goal.findFirst({ where: { endDate } })
}

export const findGoalByStartAndEndDate = async (startDate: string, endDate: string) => {
  return Goal.findMany({ where: { startDate: startDate, endDate: endDate } })
}

export const findGoalById = async (id: number) => {
  return Goal.findFirst({ where: { id } })
}

export const findGoalByIdProduct = async (idProduct: number) => {
  return Goal.findMany({ where: { idProduct } })
}

export const deleteGoal = async (id: number) => {
  return Goal.delete({ where: { id } })
}

export const updateGoal = async (id: number, data: GoalInterface) => {
  return Goal.update({ where: { id }, data })
}
