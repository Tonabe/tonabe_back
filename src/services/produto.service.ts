import { ProdutoInterface } from "../interfaces/produto.interface";
import { createProduto, deleteProduto, findAllProdutos, findProdutoById, findProdutoByNome, updateProduto } from "../repositories/produto.repository";

export const createProdutoService = async (data: ProdutoInterface) => {
    const produto = await findProdutoByNome(data.nome)

    if(produto){
        throw new Error(`Há um produto com o mesmo nome, (${data.nome}) cadastro no Banco de Dados`)
    }

    return createProduto(data)
}

export const findAllProdutosService = async () => {
    return findAllProdutos()
}

export const findProdutoByIdService = async (id: number) => {
    return findProdutoById(id)
}

export const updateProdutoService = async (id: number, data: ProdutoInterface) => {
    const produto = await findProdutoById(id)

    if(!produto){
        throw new Error(`Produto "${id}" não encontrado`)
    }

    return updateProduto(id,data)
}

export const deleteProdutoService = async (id: number) => {
    const produto = await findProdutoById(id)

    if(!produto){
        throw new Error(`Produto com o ID "${id}" não encontrado`)
    }

    return deleteProduto(id)
    
}