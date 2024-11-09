import { Router } from 'express' // Importa o Router do Express
import { createEmployee, updateEmployee, deleteEmployee, findAllEmployeeController } from '../controllers/employee.controller' // Importa os métodos do controlador
import { CreateEmployeeDTO, UpdateEmployeeDTO } from '../dtos/employee.dto'
import { validate } from '../middleware/validate.middleware'

const router = Router() // Cria uma instância do Router

router.post('/', validate(CreateEmployeeDTO), createEmployee) // Define a rota para criar um usuário
router.get('/', findAllEmployeeController) // Define a rota para buscar todos os usuários
router.patch('/:id', validate(UpdateEmployeeDTO), updateEmployee) // Define a rota para atualizar um usuário
router.delete('/:id', deleteEmployee) // define rota para deletar

export default router // Exporta o router