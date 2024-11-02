import { Router } from "express";
import { createProduto, deleteProduto, findAllProdutos, findProdutoById, ProdutoClasse, updateProduto } from "../controllers/produto.controller";

const router = Router()

router.get('/', ProdutoClasse.findAllProdutos())
router.get('/:id', findProdutoById)
router.post('/', createProduto)
router.put('/:id', updateProduto)
router.delete('/:id', deleteProduto)