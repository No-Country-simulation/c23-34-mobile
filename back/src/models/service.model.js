import {Schema,model} from 'mongoose';

const schema = new Schema({
    serviceId : {type: String, required : true, unique : true},//id del servicio, viene de la API
    serviceName : {type: String, required: true},
    serviceDescription : {type: String, required: true},
    serviceCategory : {type: String, required: true},  
    serviceDateCreated : {type: Date, default: Date.now}
})

export const serviceModel = model('service', schema);
