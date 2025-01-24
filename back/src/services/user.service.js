import {userModel} from '../models/user.model.js';
import {hashData} from '../utils/utils.js';
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
        const passHash = await hashData(userBody.userPassword)
        const user = await userModel.findByIdAndUpdate(id,{$set : {...userBody, userPassword : passHash}, new : true})
        if(!user) throw new Error('No user found and no data change')

        return {success : true,message : 'user successfully updated',user}
    }
}