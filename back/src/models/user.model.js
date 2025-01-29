import {Schema,model} from 'mongoose';

const schema = new Schema({
    userName : {type:String, required:true},
    userLastName : {type:String, required:true},
    userDNI : {type:String, required: true},
    userEmail : {type:String, required:true, unique : true},   
    userPassword : {type:String, required:true},    
    userFavoriteServices : {
        type : [ {serviceId : {type: String, required : true}} ],
        default : []
    }
})

export const userModel = model('user', schema);