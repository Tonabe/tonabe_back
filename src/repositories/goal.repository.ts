import Goal from '../entities/goal.entity' 

export const createGoal = async (data: { goal: number, startDate: Date, endDate: Date,idProduct: number }) => {
  return Goal.create({ data }) 
}

export const findAllGoals = async () => {
  return Goal.findMany() 
}

export const findGoalByStartDate = async (startDate : Date) => {
  return Goal.findFirst({ where: { startDate } }) 
}

export const findGoalByEndDate = async (endDate : Date) => {
  return Goal.findFirst({ where: { endDate } }) 
}

export const findGoalByStartAndEndDate = async (data:{startDate : Date,endDate : Date}) => {
  return Goal.findFirst({where:{ AND: [{startDate: data.startDate}, {endDate: data.endDate}]}})
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

export const updateGoal = async (id: number, data: { goal: number, startDate: Date, endDate: Date, idProduct: number }) => {
  return Goal.update({ where: { id }, data }) 
}
