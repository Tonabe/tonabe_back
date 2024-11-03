import { Router } from "express"
import {
    createService, 
    deleteService, 
    findAllServices, 
    findServiceById, 
    updateService, 
    findServicesByEmployee, 
    findServicesByProduct 
} from "../controllers/service.controller"
import { CreateServiceDTO, UpdateServiceDTO } from "../dtos/service.dto"
import { validate } from "../middleware/validate.middleware"

const router = Router()

router.post('/', validate(CreateServiceDTO), createService)
router.get('/', findAllServices)
router.get('/:id', findServiceById)
router.patch('/:id', validate(UpdateServiceDTO), updateService)
router.delete('/:id', deleteService)
router.get('/funcionario/:idFuncionario', findServicesByEmployee)
router.get('/produto/:idProduto', findServicesByProduct)

export default router