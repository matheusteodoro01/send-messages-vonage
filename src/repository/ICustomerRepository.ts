
import ICreateCustomerDTO from '../dtos/ICustomerDTO';
import { Customer } from '../entities/Customer';


export default interface ICustomersRepository {

  findAll(limit: number): Promise<Customer[] | undefined>;
  updateSendMessageById(id: string): Promise<ICreateCustomerDTO | undefined>;

}