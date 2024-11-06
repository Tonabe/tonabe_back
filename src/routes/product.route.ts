import { Router } from "express";
import { createProduct, deleteProduct, findAllProducts, findProductById, updateProduct } from "../controllers/product.controller";
import { validate } from "../middleware/validate.middleware";
import { CreateProductDto, UpdateProductDto } from "../dtos/product.dto";

const router = Router()

router.get('/', findAllProducts)
router.get('/:id', findProductById)
router.post('/', validate(CreateProductDto),createProduct)
router.put('/:id', validate(UpdateProductDto),updateProduct)
router.delete('/:id', deleteProduct)

export default router