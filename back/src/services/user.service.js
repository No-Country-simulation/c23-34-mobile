import {userModel} from '../models/user.model.js';

export class UserService{

    static async getUserById({id}){
        const user = await userModel.findById(id)
        if(!user) {
            const error = new Error('No user found')
            error.statusCode = 404
            throw error//propagacion de errores
        }

        return user
    }
    static async updateUser({id,userBody}){
        const user = await userModel.findById(id)
        if(!user) throw new Error('No user found')
        const userUpdate = await userModel.updateOne({_id : id}, {$set : userBody})
        console.log(userUpdate); 

        return {message : 'user successfully updated',userUpdate}
    }
}