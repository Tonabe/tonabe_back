import { ProductInterface } from "../interfaces/product.interface";
import { createProduct, deleteProduct, findAllProducts, findProductById, findProductByName, updateProduct } from "../repositories/product.repository";

export const createProductService = async (date: ProductInterface) => {
    const product = await findProductByName(date.name)

    if(product){
        throw new Error(`Há um product com o mesmo nome, (${date.name}) cadastro no Banco de Dados`)
    }

    return createProduct(date)
}

export const findAllProductsService = async () => {
    return findAllProducts()
}

export const findProductByIdService = async (id: number) => {
    return findProductById(id)
}

export const updateProductService = async (id: number, date: ProductInterface) => {
    const product = await findProductById(id)

    if(!product){
        throw new Error(`produto "${id}" não encontrado`)
    }

    return updateProduct(id,date)
}

export const deleteProductService = async (id: number) => {
    const product = await findProductById(id)

    if(!product){
        throw new Error(`produto com o ID "${id}" não encontrado`)
    }

    return deleteProduct(id)
    
}