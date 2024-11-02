import { Router } from "express";
import { createMeta, findAllMetas, findMetaByData, findMetaById, findMetaByIdProduto, deleteMeta, updateMeta } from "../controllers/meta.controller";

const router = Router()

router.get('/', findAllMetas)
router.get('/:id', findMetaByData)
router.get('/:id', findMetaByIdProduto)
router.post('/', createMeta)
router.get('/:id', findMetaById)
router.delete('/:id', deleteMeta)
router.patch('/:id', updateMeta)

export default router
