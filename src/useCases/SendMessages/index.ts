
import { AxiosAdapter } from "../../adpters/AxiosAdapter";
import { CustomerRepository } from "../../mongoose/repository/CustomerRepository";

import { SendMessageController } from "./SendMessageController";
import { SendMessageUseCase } from "./SendMessageUseCase";

const axiosAdapter = new AxiosAdapter()
const customerRepository = new CustomerRepository()


const sendMessageUseCase = new SendMessageUseCase(axiosAdapter, customerRepository)
const sendMessageController = new SendMessageController(sendMessageUseCase)


export { sendMessageUseCase, sendMessageController }
