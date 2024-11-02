import { UpdateServicoDTO } from '../dtos/servico.dto'
import Servico from '../entities/servico.entity'

interface CreateServicoDTO {
    idFuncionario: number
    idProduto: number
    quantidade: number
    duracao: number
    meta: number
    data: Date
}

export const createServico = async (data: CreateServicoDTO) => {
    const servico = await Servico.create({ data })
    return servico
}

export const findAllServicos = async () => {
    return Servico.findMany()
}

export const findServicoById = async (id: number) => {
    return Servico.findFirst({ where: { id } })
}

export const findServicosByFuncionario = async (idFuncionario: number) => {
    return Servico.findMany({ where: { idFuncionario } })
}

export const findServicosByProduto = async (idProduto: number) => {
    return Servico.findMany({ where: { idProduto } })
}

export const updateServico = async (id: number, data: UpdateServicoDTO) => {
    return Servico.update({ where: { id }, data })
}

export const deleteServico = async (id: number) => {
    return Servico.delete({ where: { id } })
}