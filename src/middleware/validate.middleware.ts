import { plainToInstance } from "class-transformer"
import { NextFunction, Request, Response } from "express"
import { validate as classValidatorValidate } from 'class-validator'

export const validate = (dto: any) => {
    return async (req: Request, res: Response, next: NextFunction) => {
        const data = plainToInstance(dto, req.body)
        const errors = await classValidatorValidate(data, { whitelist: true, forbidNonWhitelisted: true })

        if (errors.length > 0) {
            const formattedErrors = errors.map(err => ({
                property: err.property,
                constraints: err.constraints
            }))
            return res.status(400).json({ message: 'Dados inválidos', errors: formattedErrors })
        }

        req.body = data
        next()
    }
}