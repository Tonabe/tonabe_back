import { CreateServicoDTO, UpdateServicoDTO } from "../dtos/servico.dto"
import { createServico, deleteServico, findAllServicos, findServicoById, findServicosByFuncionario, findServicosByProduto, updateServico } from "../repositories/servico.repository"

export const createServicoService = async (data: CreateServicoDTO) => {
    // Verifique se já existe um serviço semelhante (opcional, dependendo do contexto)
    // const existingServico = await findServicoById(data.id);
    // if (existingServico) throw new Error('Serviço já existe');

    return createServico(data)
}

export const findAllServicosService = async () => {
    return findAllServicos()
}

export const findServicoByIdService = async (id: number) => {
    const servico = await findServicoById(id)
    if (!servico) throw new Error('Serviço não encontrado')

    return servico
}

export const findServicosByFuncionarioService = async (idFuncionario: number) => {
    return await findServicosByFuncionario(idFuncionario)
}

export const findServicosByProdutoService = async (idProduto: number) => {
    return await findServicosByProduto(idProduto)
}

export const updateServicoService = async (id: number, data: UpdateServicoDTO) => {
    const servico = await findServicoById(id)
    if (!servico) throw new Error('Serviço não encontrado')

    return await updateServico(id, data)
}

export const deleteServicoService = async (id: number) => {
    const servico = await findServicoById(id)
    if (!servico) throw new Error('Serviço não encontrado')

    return await deleteServico(id)
};