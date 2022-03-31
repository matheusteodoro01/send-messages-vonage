import { Request, Response } from 'express';
import { sendMessageUseCase } from "./index"
import { SendMessageUseCase } from './SendMessageUseCase';

export class SendMessageController {
    constructor(
        private sendMessageUseCase: SendMessageUseCase
    ) { }


    async send(request: Request, response: Response) {

        let responseData = await sendMessageUseCase.execute()

        return response.status(200).json(responseData)



    }
}










