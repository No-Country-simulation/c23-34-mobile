import {Schema,model} from 'mongoose';

const schema = new Schema({
    name : {type: String, required: true},
    description : {type: String, required: true},
    provider : {type: String, required: true},  
    dateCreated : {type: Date, default: Date.now}
})

export const serviceModel = model('service', schema);
