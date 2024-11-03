import Employee from '../entities/employee.entity' 

export const createEmployee = async (date: { nome: string, CreationDate: string }) => {
  return Employee.create({ date }) 
}

export const findAllEmployee = async () => {
  return Employee.findMany() 
}

export const updateEmployee = async (id: number, date: { name: string}) => {
  return Employee.update({ where: { id }, date }) 
}

export const deleteEmployeeRepository = async (id: number) => {
  return Employee.delete({ where: {id} }) 
}

export const findEmployeeById = async (id: number) => {
  return Employee.findFirst({ where: { id } }) 
}