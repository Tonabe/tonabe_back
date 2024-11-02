import { Request, Response } from 'express'
import {
    createServicoService,
    deleteServicoService,
    findAllServicosService,
    findServicoByIdService,
    findServicosByFuncionarioService,
    findServicosByProdutoService,
    updateServicoService
} from '../services/servico.service.js'

export const createServico = async (req: Request, res: Response) => {
    try {
        const servico = await createServicoService(req.body)
        return res.status(201).json(servico)
    } catch (error) {
        return res.status(400).json({ error })
    }
};

export const findAllServicos = async (req: Request, res: Response) => {
    const servicos = await findAllServicosService()
    return res.json(servicos)
};

export const findServicoById = async (req: Request, res: Response) => {
    try {
        const id = Number(req.params.id)
        if (isNaN(id)) {
            return res.status(400).json({ message: 'ID inválido' })
        }
        
        const servico = await findServicoByIdService(id)
        return res.status(200).json(servico)
    } catch (error) {
        return res.status(400).json({ error })
    }
}

export const updateServico = async (req: Request, res: Response) => {
    try {
        const id = Number(req.params.id)
        if (isNaN(id)) {
            return res.status(400).json({ message: 'ID inválido' })
        }
        
        const servico = await updateServicoService(id, req.body)
        return res.status(200).json(servico)
    } catch (error) {
        return res.status(400).json({ error })
    }
};

export const deleteServico = async (req: Request, res: Response) => {
    try {
        const id = Number(req.params.id)
        if (isNaN(id)) {
            return res.status(400).json({ message: 'ID inválido' })
        }
        
        const servico = await deleteServicoService(id)
        return res.status(200).json(servico)
    } catch (error) {
        return res.status(400).json({ error })
    }
};

export const findServicosByFuncionario = async (req: Request, res: Response) => {
    try {
        const idFuncionario = Number(req.params.idFuncionario)
        if (isNaN(idFuncionario)) {
            return res.status(400).json({ message: 'ID do funcionário inválido' })
        }
        
        const servicos = await findServicosByFuncionarioService(idFuncionario)
        return res.status(200).json(servicos)
    } catch (error) {
        return res.status(400).json({ error })
    }
};

export const findServicosByProduto = async (req: Request, res: Response) => {
    try {
        const idProduto = Number(req.params.idProduto)
        if (isNaN(idProduto)) {
            return res.status(400).json({ message: 'ID do produto inválido' })
        }
    
        const servicos = await findServicosByProdutoService(idProduto)
        return res.status(200).json(servicos)
    } catch (error) {
        return res.status(400).json({ error })
    }
};