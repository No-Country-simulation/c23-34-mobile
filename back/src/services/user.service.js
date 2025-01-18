import {userModel} from '../models/user.model.js';
import {hashData} from '../utils/utils.js';

export class UserService{
    static async getUsers(){
        const users = await userModel.find();
        if(!users) throw new Error('No users found');
        return users;
    }
    static async getUserById({id}){
        const user = await userModel.findOne({_id:id})
        if(!user) throw new Error('No user found')
        return user
    }
    static async createUser({userBody}){
        const {password} = userBody
        const passHash = await hashData(password)
        const user = await userModel.create({...userBody,passHash})
        console.log(user);//lanzar un error
        return user
    }
    static async updateUser({id,userBody}){
        const user = await userModel.findById(id)
        if(!user) throw new Error('No user found')
        
        for(let attribute in userBody){
            if(user.howOwnerProperty(attribute)){
                user[attribute] = userBody[attribute]
            }
        }

        const userUpdate = await user.save()
        console.log(userUpdate); //lanzar error
        return userUpdate
    }

    static async deleteUser({id}){
        const user = await userModel.findOneAndDelete(id)
        console.log(user) //lanzar error;
        return user
    }
}