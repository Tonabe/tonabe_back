import Product from '../entities/product.entity'
import Service from '../entities/service.entity'
import { ProductInterface } from '../interfaces/product.interface'

export const createProduct = async (data: ProductInterface) => {
    return Product.create({ data })
}

export const findAllProducts = async () => {
    return Product.findMany()
}

export const findProductByName = async (name: string) => {
    return Product.findFirst({ where: { name } })
}

export const findProductById = async (id: number) => {
    return Product.findFirst({ where: { id } })
}

export const updateProduct = async (id: number, data: ProductInterface) => {
    return Product.update({ where: { id }, data })
}

export const deleteProduct = async (id: number) => {
    return Product.delete({ where: { id } })
}

export const findReportProductByService = async (idProduct: number, dateStart: string, dateEnd: string) => {
    const report = await Service.findMany({
        where: {
            idProduct: idProduct,
            date: {
                gte: dateStart,
                lte: dateEnd
            }
        }
    })
    return report
}