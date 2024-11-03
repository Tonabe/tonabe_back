import { Router } from "express";
import { createProduct, deleteProduct, findAllProducts, findProductById, updateProduct } from "../controllers/product.controller";

const router = Router()

router.get('/', findAllProducts)
router.get('/:id', findProductById)
router.post('/', createProduct)
router.put('/:id', updateProduct)
router.delete('/:id', deleteProduct)

export default router