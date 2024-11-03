import { ProductInterface } from "../interfaces/product.interface";
import { createProduct, deleteProduct, findAllProducts, findProductById, findProductByName, updateProduct } from "../repositories/product.repository";

export const createProductService = async (data: ProductInterface) => {
    const product = await findProductByName(data.name)

    if(product){
        throw new Error(`There is a product with the same name, (${data.name}) registered in DataBase`)
    }

    return createProduct(data)
}

export const findAllProductsService = async () => {
    return findAllProducts()
}

export const findProductByIdService = async (id: number) => {
    return findProductById(id)
}

export const updateProductService = async (id: number, data: ProductInterface) => {
    const product = await findProductById(id)

    if(!product){
        throw new Error(`Product ID "${id}" not found`)
    }

    return updateProduct(id,data)
}

export const deleteProductService = async (id: number) => {
    const product = await findProductById(id)

    if(!product){
        throw new Error(`Product ID "${id}" not found`)
    }

    return deleteProduct(id)
    
}