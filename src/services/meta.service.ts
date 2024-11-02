import { createMeta, findAllMetas, findMetaByData, findMetaById, findMetaByIdProduto, deleteMeta } from '../repositories/meta.repository' // Importa os métodos do repositório

export const createMeta = async (data: { meta: number, data: Date, idProduto: number }) => {
  const meta = await findMetaByData(data.data) 

  if (meta) {
    throw new Error('Meta já existe') 
  }

  return createMeta(data) 
}

export const findAllMetasService = async () => {
  return findAllMetas() 
}

export const findMetaByDataService = async (data: Date) => {
    return findMetaByData(Date)
}

export const findMetaByIdService = async (id: number) => {
    return findMetaById(id)
}

export const findMetaByIdProdutoService = async (idProduto: number) => {
    return findMetaByIdProduto(idProduto)
}

export const deleteMetaService = async (id: number) => {
    const meta = await findMetaById(id)

    if(!meta){
        throw new Error(`Meta com o ID "${id}" não encontrado`)
    }

    return deleteMeta(id)
}

