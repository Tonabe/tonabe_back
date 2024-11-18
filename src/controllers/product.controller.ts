import { Request, Response } from 'express';
import { createProductService, deleteProductService, findAllProductsService, findProductByIdService, updateProductService } from "../services/product.service";

export const createProduct = async (req: Request, res: Response) => {
    try {
        const products = await findAllProductsService()
        const isDuplicate = products.some((product: any) => product.name.toUpperCase() === req.body.name.toUpperCase() && product.seal === req.body.seal)

        if (isDuplicate) {
            return res.status(400).json({ message: "Produto já cadastrado!" })
        }
        const product = await createProductService(req.body)
        return res.status(201).json({ "Product": product })

    } catch (error: any) {
        return res.status(500).json({ message: "Erro ao criar produto!", error: error.message })
    }
}

export const findProductById = async (req: Request, res: Response) => {
    try {
        const product = await findProductByIdService(Number(req.params.id))
        return res.status(200).json({ "Product": product })
    } catch (error) {
        return res.status(400).json({ "error": error })
    }
}

export const findAllProducts = async (req: Request, res: Response) => {
    const products = await findAllProductsService()
    return res.status(200).json({ "Products": products })
}

export const updateProduct = async (req: Request, res: Response) => {
    try {
        const product = await updateProductService(Number(req.params.id), req.body)
        return res.status(200).json({ "Product": product })
    } catch (error) {
        return res.status(400).json({ "error": error })
    }
}

export const deleteProduct = async (req: Request, res: Response) => {
    try {
        await deleteProductService(Number(req.params.id))
        return res.status(204).send()
    } catch (error) {
        return res.status(400).json({ "error": error })
    }
}