import {userModel} from '../models/user.model.js';
import {hashData, verifyHashData} from '../utils/utils.js';
import {SECRET_KEY} from '../utils/config.js';
import jwt  from 'jsonwebtoken';

export class AuthService{
    static async signUp ({authBody}){
        const user = await userModel.findOne({userEmail : authBody.userEmail})
        if(user) throw new Error ('This email is registered')
        const passHash = await hashData(authBody.userPassword)
        const newUser = await userModel.create({...authBody, userPassword : passHash})

        return {success:true, message : 'user successfully registered', newUser}
    }
    static async logIn ({authBody}){
        const {userEmail, userPassword}  = authBody
        const user = await userModel.findOne({userEmail})
        if(!user) throw new Error('User no found by email')
        const validatePass = await verifyHashData(userPassword, user.userPassword)
        if(!validatePass) throw new Error('Password no match with email')
        const token = jwt.sign({id : user._id}, SECRET_KEY, {expiresIn : '30m'} )
        
        return {token, user}
    }
}