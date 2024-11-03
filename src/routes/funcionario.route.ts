import { Router } from 'express' // Importa o Router do Express
import { createFuncionario, updateFuncionario, deletarFuncionario, findAllFuncionarioController } from '../controllers/funcionario.controller' // Importa os métodos do controlador

const router = Router() // Cria uma instância do Router

router.post('/', createFuncionario) // Define a rota para criar um usuário
router.get('/', findAllFuncionarioController) // Define a rota para buscar todos os usuários
router.patch('/:id', updateFuncionario) // Define a rota para atualizar um usuário
router.delete('/:id', deletarFuncionario) // define rota para deletar

export default router // Exporta o router