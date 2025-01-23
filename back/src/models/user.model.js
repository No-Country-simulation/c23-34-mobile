import {Schema,model} from 'mongoose';

const schema = new Schema({
    userName : {type:String, required:true},
    userLastName : {type:String, required:true},
    userDni : {type:String, required: true},
    userEmail : {type:String, required:true, unique : true},   
    userPassword : {type:String, required:true},    
    userFavoriteServices : {
        type : [ {type : Schema.Types.ObjectId, ref : 'service'}],
        default : []
    }
})

export const userModel = model('user', schema);