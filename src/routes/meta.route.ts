import { Router } from "express";
import { createMeta, findAllMetas, findMetaByData, findMetaById, findMetaByIdProduto, deleteMeta, updateMeta } from "../controllers/meta.controller";
import { validate } from '../middlewares/validate.middleware'
import { CreateMetaDto, UpdateMetaDto } from '../dtos/meta.dto'

router.post('/', validate(CreateMetaDto), createMeta) 
router.patch('/:id', validate(UpdateMetaDto), updateMeta) 
router.get('/', findAllMetas)
router.get('/:id', findMetaByData)
router.get('/:id', findMetaByIdProduto)
router.get('/:id', findMetaById)
router.delete('/:id', deleteMeta)

export default router
