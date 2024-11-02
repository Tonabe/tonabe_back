import { Request, Response } from 'express';
import { createMetaService, updateMetaService, deleteMetaService, findAllMetasService, findMetaByIdService, findMetaByIdProdutoService, findMetaByDataService } from "../services/meta.service";

export const createMeta = async (req: Request, res: Response)=> {
    try {
        const meta = await createMetaService(req.body)
        return res.status(201).json({"Meta": meta})
    } catch (error) {
        return res.status(400).json({"error": error})
    }
}

export const findMetaById = async (req: Request, res: Response) => {
    try{
        const meta = await findMetaByIdService(Number(req.params.id))
        return res.status(200).json({"Meta": meta})
    }catch(error){
        return res.status(400).json({"error": error})
    }
}

export const findAllMetas = async (req: Request, res: Response) => {
    const metas = await findAllMetasService()
    return res.status(200).json({"Metas": netas})
}

export const findMetaByIdProduto = async (req: Request, res: Response) => {
    try{
        const meta = await findMetaByIdProdutoService(Number(req.params.id))
        return res.status(200).json({"Meta": meta})
    }catch(error){
        return res.status(400).json({"error": error})
    }
}

export const findMetaByData = async (req: Request, res: Response) => {
    try{
        const meta = await findMetaByDataService(Date(req.params.id))
        return res.status(200).json({"Meta": meta})
    }catch(error){
        return res.status(400).json({"error": error})
    }
}

export const deleteMeta = async (req: Request, res: Response) => {
    try{
        await deleteMetaService(Number(req.params.id))
        return res.status(204).send()
    } catch(error){
        return res.status(400).json({"error": error})
    }
}

export const updatMeta = async (req: Request, res: Response) => {
  try {
    const meta = await updateMetaService(Number(req.params.id), req.body) 
    return res.status(200).json(meta) 
  } catch (error) {
    return res.status(400).json({ message: error }) 
  }
}
