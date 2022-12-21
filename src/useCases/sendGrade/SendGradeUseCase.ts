import activityService from "../../service/activityService"
import { AppError } from "../../shared/error/AppError"
import { ISendGradeRequestDTO } from "./ISendGradeRequestDTO"

export class SendGradeUseCase {
    constructor() {}

    async execute(data: ISendGradeRequestDTO) {
        let { _id, grade } = data
        try {
            await activityService.put(`/update/activities/${_id}`, { grade })
        } catch (err: any) {
            throw new AppError(400, err.message)
        }
    }
}