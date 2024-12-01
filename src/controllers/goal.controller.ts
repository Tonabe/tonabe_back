import { Request, Response } from 'express';
import { createGoalService, updateGoalService, deleteGoalService, findAllGoalsService, findGoalByIdService, findGoalByIdProductService, findGoalBydateService } from "../services/goal.service";

export const createGoal = async (req: Request, res: Response) => {
    try {
        const { goal, startDate, endDate, idProduct } = req.body
        const validatedGoal = Number(goal)
        const validatedIdProduct = Number(idProduct)

        if (isNaN(validatedGoal) || isNaN(validatedIdProduct)) {
            return res.status(400).json({ error: "'goal' e 'idProduct' devem ser números válidos" })
        }

        if (validatedGoal <= 0) {
            return res.status(400).json({ error: "'goal' deve ser maior que zero" })
        }

        const start = new Date(startDate)
        const end = new Date(endDate)

        if (isNaN(start.getTime()) || isNaN(end.getTime())) {
            return res.status(400).json({ error: "'startDate' e 'endDate' devem ser datas válidas no formato yyyy-mm-dd" })
        }

        if (start > end) {
            return res.status(400).json({ error: "'startDate' não pode ser maior que 'endDate'" })
        }

        const existingGoals = await findAllGoalsService()

        const goalExists = existingGoals.some(g =>
            g.goal === validatedGoal &&
            new Date(g.startDate).getTime() === start.getTime() &&
            new Date(g.endDate).getTime() === end.getTime() &&
            g.idProduct === validatedIdProduct
        )

        if (goalExists) {
            return res.status(409).json({ error: 'Já existe uma meta com esses mesmos dados' })
        }

        const goalData = await createGoalService({
            goal: validatedGoal,
            startDate,
            endDate,
            idProduct: validatedIdProduct
        })

        return res.status(201).json({ Goal: goalData })
    } catch (error: unknown) {
        if (error instanceof Error) {
            return res.status(400).json({ error: error.message || 'Erro ao criar goal' })
        }
        return res.status(400).json({ error: 'Erro desconhecido' })
    }
}

export const findGoalById = async (req: Request, res: Response) => {
    try {
        const goalId = Number(req.params.id)
        if (isNaN(goalId)) {
            return res.status(400).json({ "error": 'ID da meta inválido' })
        }

        const goal = await findGoalByIdService(goalId)
        if (!goal) {
            return res.status(404).json({ "error": 'Meta não existe' })
        }

        return res.status(200).json({ "Goal": goal })
    } catch (error) {
        return res.status(500).json({ "error": 'Erro ao buscar meta' })
    }
}

export const findAllGoals = async (req: Request, res: Response) => {
    try {
        const goals = await findAllGoalsService()
        if (goals.length === 0) {
            return res.status(404).json({ "error": 'Nenhuma meta encontrada' })
        }

        return res.status(200).json({ "Goals": goals })
    } catch (error) {
        return res.status(500).json({ "error": 'Erro ao buscar metas' })
    }
}

export const findGoalByIdProduct = async (req: Request, res: Response) => {
    try {
        const productId = Number(req.params.id)
        if (isNaN(productId)) {
            return res.status(400).json({ "error": 'ID do produto inválido' })
        }

        const goal = await findGoalByIdProductService(productId)
        if (!goal) {
            return res.status(404).json({ "error": 'Meta não encontrada para o produto' })
        }

        return res.status(200).json({ "Goal": goal })
    } catch (error) {
        return res.status(500).json({ "error": 'Erro ao buscar meta por produto' })
    }
}

export const findGoalByDate = async (req: Request, res: Response) => {
    try {
        const { startDate, endDate } = req.body

        if (!startDate || !endDate) {
            return res.status(400).json({ "error": 'Datas inválidas ou ausentes' })
        }

        const goal = await findGoalBydateService(startDate, endDate)
        if (!goal) {
            return res.status(404).json({ "error": 'Nenhuma meta encontrada para o intervalo de datas' })
        }

        return res.status(200).json({ "Goal": goal })
    } catch (error) {
        return res.status(500).json({ "error": 'Erro ao buscar meta por datas' })
    }
}

export const updateGoal = async (req: Request, res: Response) => {
    try {
        const { goal, startDate, endDate, idProduct } = req.body

        const validatedGoal = Number(goal)
        const validatedIdProduct = Number(idProduct)

        if (isNaN(validatedGoal) || isNaN(validatedIdProduct)) {
            return res.status(400).json({ error: "'goal' e 'idProduct' devem ser números válidos" })
        }

        if (validatedGoal <= 0) {
            return res.status(400).json({ error: "'goal' deve ser maior que zero" })
        }

        const start = new Date(startDate)
        const end = new Date(endDate)

        if (isNaN(start.getTime()) || isNaN(end.getTime())) {
            return res.status(400).json({ error: "'startDate' e 'endDate' devem ser datas válidas no formato yyyy-mm-dd" })
        }

        if (start > end) {
            return res.status(400).json({ error: "'startDate' não pode ser maior que 'endDate'" })
        }

        const updatedGoal = await updateGoalService(Number(req.params.id), {
            goal: validatedGoal,
            startDate,
            endDate,
            idProduct: validatedIdProduct
        })

        return res.status(200).json(updatedGoal)
    } catch (error: unknown) {
        if (error instanceof Error) {
            return res.status(400).json({ error: error.message || 'Erro ao atualizar goal' })
        }
        return res.status(400).json({ error: 'Erro desconhecido' })
    }
}

export const deleteGoal = async (req: Request, res: Response) => {
    try {
        const goalId = Number(req.params.id)
        if (isNaN(goalId)) {
            return res.status(400).json({ "erro": "ID inválido" })
        }

        const result = await deleteGoalService(goalId)
        if (!result) {
            return res.status(404).json({ "erro": "Meta não encontrada" })
        }

        return res.status(204).send()
    } catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ "erro": `Erro interno: ${error.message}` })
        }
        return res.status(500).json({ "erro": "Erro desconhecido" })
    }
}

