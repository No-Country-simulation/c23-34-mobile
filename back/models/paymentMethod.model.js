import {Schema, model} from 'mongoose';

const schema = new Schema({
    userId: {type: schema.Types.ObjectId, ref: 'user', required: true},
    cardHolderName: {type: String, required: true}, 
    cardNumber : {type: String, required: true, select : false},    
    cardType : {type: String, enum : ['credit' , 'debit'],required: true},
    expirationDate : {type: Date, required: true},
    cvv : {type: String, required: true, select : false},
    dateCreated : {type: Date, default: Date.now}
})

export const paymentMethodModel = model('paymentMethod', schema);   

