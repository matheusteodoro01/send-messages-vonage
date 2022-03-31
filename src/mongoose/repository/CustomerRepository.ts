import ICustomerDTO from "../../dtos/ICustomerDTO";
import { Customer } from "../../entities/Customer";
import ICustomersRepository from "../../repository/ICustomerRepository";
import CustomerModel from "../models/CustomerModel";


export class CustomerRepository implements ICustomersRepository {
    constructor() {
    }
    public async findAll(limit: number): Promise<Customer[] | undefined> {
        let customers = await CustomerModel.find({ sendMessage: false, phone: { $exists: true, $ne: null } }).limit(limit)
        return customers
    }
    public async updateSendMessageById(id: string): Promise<ICustomerDTO | undefined> {
        let customerUpdated = await CustomerModel.findByIdAndUpdate({
            _id: id
        }, { sendMessage: true }
        )
        return customerUpdated
    }
}
