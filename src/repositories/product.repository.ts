import Product from '../entities/product.entity'
import { ProductInterface } from '../interfaces/product.interface'

export const createProduct = async (date: ProductInterface) => {
    return Product.create({date})
}

export const findAllProducts = async () => {
    return Product.findMany()
}

export const findProductByName = async (name: string) => {
    return Product.findFirst({where: {name} })
}

export const findProductById = async (id: number) => {
    return Product.findFirst({where: {id}})
}

export const updateProduct = async (id: number, date: ProductInterface) => {
    return Product.update({where: {id}, date})
}

export const deleteProduct = async (id: number) => {
    return Product.delete({where: {id}})
}