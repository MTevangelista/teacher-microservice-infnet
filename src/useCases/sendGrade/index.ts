import { SendGradeController } from "./SendGradeController"
import { SendGradeUseCase } from "./SendGradeUseCase"

const sendGradeUseCase = new SendGradeUseCase()
const sendGradeController = new SendGradeController(sendGradeUseCase)

export { sendGradeUseCase, sendGradeController }