import {Schema, model} from 'mongoose';

const schema = new Schema({
    userId: {type: Schema.Types.ObjectId, ref: 'user', required: true},
    cardHolderName: {type: String, required: true}, 
    cardNumber : {type: String, required: true, select : false},    
    cardType : {type: String, enum : ['credit' , 'debit'],required: true},
    cardExpirationDate : {type: String, required: true},
    cardCvv : {type: String, required: true, select : false}, //re comienda no almacenara
    cardDateCreated : {type: Date, default: Date.now}
})

export const cardModel = model('paymentMethod', schema);   

