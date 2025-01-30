import {Schema, model} from 'mongoose';

const schema = new Schema({
    userId: {type: Schema.Types.ObjectId, ref: 'user', required: true},
    token : {type: Object, required: true},
    cardDateCreated : {type: Date, default: Date.now}
})

export const cardModel = model('paymentMethod', schema);   

