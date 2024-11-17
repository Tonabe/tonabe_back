import { Router } from "express";
import { createGoal, findAllGoals, findGoalByDate, findGoalById, findGoalByIdProduct, deleteGoal, updateGoal } from "../controllers/goal.controller";
import { validate } from '../middleware/validate.middleware'
import { CreateGoalDTO, UpdateGoalDTO } from '../dtos/goal.dto'

const router = Router() 

router.post('/', validate(CreateGoalDTO), createGoal) 
router.patch('/:id', validate(UpdateGoalDTO), updateGoal) 
router.get('/', findAllGoals)
router.get('/date', findGoalByDate)
router.get('/:id', findGoalByIdProduct)
router.get('/:id', findGoalById)
router.delete('/:id', deleteGoal)

export default router
