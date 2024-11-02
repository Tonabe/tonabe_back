import { Request, Response } from 'express';
import { createProdutoService, deleteProdutoService, findAllProdutosService, findProdutoByIdService, updateProdutoService } from "../services/produto.service";

export const createProduto = async (req: Request, res: Response)=> {
    try {
        const produto = await createProdutoService(req.body)
        return res.status(201).json({"Produto":produto})
    } catch (error) {
        return res.status(400).json({"error": error})
    }
}

export const findProdutoById = async (req: Request, res: Response) => {
    try{
        const produto = await findProdutoByIdService(Number(req.params.id))
        return res.status(200).json({"Produto": produto})
    }catch(error){
        return res.status(400).json({"error": error})
    }
}

export const findAllProdutos = async (req: Request, res: Response) => {
    const produtos = await findAllProdutosService()
    return res.status(200).json({"Produtos":produtos})
}

export const updateProduto = async (req: Request, res: Response) => {
    try {
        const produto = await updateProdutoService(Number(req.params.id), req.body)
        return res.status(200).json({"Produto":produto})
    } catch (error) {
        return res.status(400).json({"error": error})
    }
}

export const deleteProduto = async (req: Request, res: Response) => {
    try{
        await deleteProdutoService(Number(req.params.id))
        return res.status(204).send()
    } catch(error){
        return res.status(400).json({"error": error})
    }
}