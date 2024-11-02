import { Router } from "express"
import {
    createServico, 
    deleteServico, 
    findAllServicos, 
    findServicoById, 
    updateServico, 
    findServicosByFuncionario, 
    findServicosByProduto 
} from "../controllers/servico.controller"
import { CreateServicoDTO, UpdateServicoDTO } from "../dtos/servico.dto"
import { validate } from "../middleware/validate.middleware"

const router = Router()

router.post('/', validate(CreateServicoDTO), createServico)
router.get('/', findAllServicos)
router.get('/:id', findServicoById)
router.patch('/:id', validate(UpdateServicoDTO), updateServico)
router.delete('/:id', deleteServico)
router.get('/funcionario/:idFuncionario', findServicosByFuncionario)
router.get('/produto/:idProduto', findServicosByProduto)

export default router