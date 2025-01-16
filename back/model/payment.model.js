import {Schema, model} from 'mongoose';

const schema = new Schema({
    userId : {type: Schema.Types.ObjectId, ref: 'user', required : true},
    serviceId : {type: Schema.Types.ObjectId, ref: 'service', required : true},
    paymentMethodId : {type: Schema.Types.ObjectId, ref: 'paymentMethod', required : true},
    amount : {type: Number, required : true},   
    status : {type: String, enum : ['pending', 'approved', 'rejected'], default : 'pending',required : true},   
    dateCreated : {type: Date, default: Date.now}
})

export const paymentModel = model('payment', schema);