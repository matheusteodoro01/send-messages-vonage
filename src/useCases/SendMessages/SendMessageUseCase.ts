import { response } from "express"
import { AxiosAdapter } from "../../adpters/AxiosAdapter"
import { CustomerRepository } from "../../mongoose/repository/CustomerRepository"



export class SendMessageUseCase {
    constructor(
        private axiosAdapter: AxiosAdapter,
        private customerRepository: CustomerRepository
    ) { }

    api = this.axiosAdapter.api()

    public async execute() {

        let customers = await this.customerRepository.findAll(20)
        console.log(customers?.length)

        const response = customers?.map(async customer => {

            let data = {
                vid: 31488301,
                properties: {
                    phone: { "value": "+5543991288300" },
                    front_conversation_id: { "value": "cnv_eln8hap" },
                    firstname: { value: "Matheus Teodoro" },
                    front_owner: { value: "matheus.teodoro@carupi.com" },
                    front_owner_s_first_name: { value: "Matheus Teodoro" },
                    whatsapp_template_payload: {
                        value: `{"from":{"type":"whatsapp","number":"5511953259788"},"to":{"type":"whatsapp","number":"${customer.phone}"},"message":{"content":{"type":"custom","custom":{"type":"template","template":{"namespace":"6b3b7992_94a4_49a6_a23d_7ddd06600f49","name":"mudanca_para_atendimento_por_email","language":{"code":"pt_BR","policy":"deterministic"},"components":[{"type":"body"}]}}}}}`
                    },
                    vonage_whatsapp_template_body_output: {
                        value: "Olá cliente CARUPI<br/>Em breve suspenderemos o nosso atendimento pelo Whatsapp e ele será feito exclusivamente através do email clientes@carupi.com.<br/><br/>Obrigado,<br/>CARUPI"
                    }
                }
            }


                await this.api.post('/send-automatic-message-to-contact', data)

                    .then(async data => {
                        console.log(data.status, customer.phone)
                        await this.customerRepository.updateSendMessageById(customer.id)
                        return data
                    })

                    .catch(err => {

                        console.log(err.response.status, customer.phone)
                        return err
                    })

            
        })

        await Promise.all(response)

        return null
    }

}

