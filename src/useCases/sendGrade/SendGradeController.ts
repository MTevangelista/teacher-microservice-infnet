import { Request, Response } from "express"
import { AppError } from "../../shared/error/AppError"
import { SendGradeUseCase } from "./SendGradeUseCase"

export class SendGradeController {
    constructor(
        private sendGradeUseCase: SendGradeUseCase
    ) {}

    async handle(request: Request, response: Response): Promise<Response | void> {
        try {
            await this.sendGradeUseCase.execute(request.body)
            return response.status(200).send()
        } catch (err) {
            if (err instanceof AppError) {
                return response.status(err.status).json({
                    message: err.message
                })
            }
        }
    }
}