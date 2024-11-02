import Meta from '../entities/meta.entity' // Importa o modelo de usuário

export const createMeta = async (data: { meta: number, data: Date, idProduto: number }) => {
  return Meta.create({ data }) // Cria um novo usuário
}

export const findAllMetas = async () => {
  return Meta.findMany() // Busca todos os usuários
}

export const findMetaByData = async (data: Date) => {
  return Meta.findFirst({ where: { Date } }) // Busca um usuário pelo e-mail
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
