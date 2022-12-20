import { Router } from "express"
import { sendGradeController } from "../../useCases/sendGrade"

const routes = Router()

routes.post("/teachers", (request, response) => {
    return sendGradeController.handle(request, response)
})

export default routes