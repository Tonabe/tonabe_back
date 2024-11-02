import Meta from '../entities/meta.entity' 

export const createMeta = async (data: { meta: number, data: Date, idProduto: number }) => {
  return Meta.create({ data }) 
}

export const findAllMetas = async () => {
  return Meta.findMany() 
}

export const findMetaByData = async (data: Date) => {
  return Meta.findFirst({ where: { Date } }) 
}

export const findMetaById = async (id: number) => {
    return Meta.findFirst({ where: { id } })
}

export const findMetaByIdProduto = async (idProduto: number) => {
    return Meta.findMany({ where: { idProduto } })
}

export const deleteMeta = async (id: number) => {
    return Meta.delete({ where: { id } })
}

export const updateMeta = async (id: number, data: { meta: number, data: Date, idProduto: number }) => {
  return Meta.update({ where: { id }, data }) 
}
