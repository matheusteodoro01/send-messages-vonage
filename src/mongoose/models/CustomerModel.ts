
import mongoose from "mongoose";
import {Schema} from "mongoose"


const CustomerModel = new Schema({
    phone: String,
    sendMessage: Boolean
})

export default mongoose.model('lista', CustomerModel);
