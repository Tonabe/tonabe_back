import { Request, Response } from 'express';
import { createGoalService, updateGoalService, deleteGoalService, findAllGoalsService, findGoalByIdService, findGoalByIdProductService, findGoalBydateService } from "../services/goal.service";

export const createGoal = async (req: Request, res: Response)=> {
    try {
        const goal = await createGoalService(req.body)
        return res.status(201).json({"Goal": goal})
    } catch (error) {
        return res.status(400).json({"error": error})
    }
}

export const findGoalById = async (req: Request, res: Response) => {
    try{
        const goal = await findGoalByIdService(Number(req.params.id))
        return res.status(200).json({"Goal": goal})
    }catch(error){
        return res.status(400).json({"error": error})
    }
}

export const findAllGoals = async (req: Request, res: Response) => {
    const goals = await findAllGoalsService()
    return res.status(200).json({"Goals": goals})
}

export const findGoalByIdProduct = async (req: Request, res: Response) => {
    try{
        const goal = await findGoalByIdProductService(Number(req.params.id))
        return res.status(200).json({"Goal": goal})
    }catch(error){
        return res.status(400).json({"error": error})
    }
}

export const findGoalByDate = async (req: Request, res: Response) => {
    try{
        const goal = await findGoalBydateService(Date(req.params.id))
        return res.status(200).json({"Goal": goal})
    }catch(error){
        return res.status(400).json({"error": error})
    }
}

export const deleteGoal = async (req: Request, res: Response) => {
    try{
        await deleteGoalService(Number(req.params.id))
        return res.status(204).send()
    } catch(error){
        return res.status(400).json({"error": error})
    }
}

export const updateGoal = async (req: Request, res: Response) => {
  try {
    const goal = await updateGoalService(Number(req.params.id), req.body) 
    return res.status(200).json(goal) 
  } catch (error) {
    return res.status(400).json({ message: error }) 
  }
}
