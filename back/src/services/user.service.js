import {userModel} from '../models/user.model.js';
import {hashData} from '../utils/utils.js';

export class UserService{
    static async getUsers(){
        const users = await userModel.find();
        if(users.length == 0) throw new Error('There are not users');

        return users;
    }
    static async getUserById({id}){
        const user = await userModel.findById(id)
        if(!user) {
            const error = new Error('No user found')
            error.statusCode = 404
            throw error//propagacion de errores
        }

        return user
    }
    static async createUser({userBody}){
        const passHash = await hashData(userBody.userPassword)
        const user = await userModel.create({...userBody, userPassword: passHash})
        console.log(user);//lanzar un error si no se creea

        return {message: 'user successfully created',user}
    }
    static async updateUser({id,userBody}){
        const user = await userModel.findById(id)
        if(!user) throw new Error('No user found')
        const userUpdate = await userModel.updateOne({_id : id}, {$set : userBody})
        console.log(userUpdate); 

        return {message : 'user successfully updated',userUpdate}
    }

    static async deleteUser({id}){
        const user = await userModel.findByIdAndDelete(id)
        console.log(user) 

        return {message : 'user successfully deleted'}
    }
}