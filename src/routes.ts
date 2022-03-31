import { Router } from "express";
import { sendMessageController } from "./useCases/SendMessages";





const routes = Router()

routes.get('/send', sendMessageController.send)



export default routes