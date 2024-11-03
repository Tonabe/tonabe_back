import Goal from '../entities/goal.entity' 

export const createGoal = async (date: { goal: number, date: Date, idProduct: number }) => {
  return Goal.create({ date }) 
}

export const findAllGoals = async () => {
  return Goal.findMany() 
}

export const findGoalByDate = async (date: Date) => {
  return Goal.findFirst({ where: { date } }) 
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

export const updateGoal = async (id: number, date: { goal: number, date: Date, idProduct: number }) => {
  return Goal.update({ where: { id }, date }) 
}
