import Produto from '../entities/produto.entity'
import { ProdutoInterface } from '../interfaces/produto.interface'

export const createProduto = async (data: ProdutoInterface) => {
    return Produto.create({data})
}

export const findAllProdutos = async () => {
    return Produto.findMany()
}

export const findProdutoByNome = async (nome: string) => {
    return Produto.findFirst({where: {nome} })
}

export const findProdutoById = async (id: number) => {
    return Produto.findFirst({where: {id}})
}

export const updateProduto = async (id: number, data: ProdutoInterface) => {
    return Produto.update({where: {id}, data})
}

export const deleteProduto = async (id: number) => {
    return Produto.delete({where: {id}})
}