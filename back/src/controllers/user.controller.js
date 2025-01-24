import {UserService} from '../services/user.service.js';

export class UserController {
    static async getUserById(req,res,next){
        try {
            const {id} = req.params
            const user = await UserService.getUserById({id})
            res.status(200).json(user)
        } catch (error) {
            next(error)
        }
    }
    static async updateUser(req,res,next){
        try {
            const {id} = req.params
            const userBody = req.body
            const user = await UserService.updateUser({id,userBody})
            res.status(200).json(user)
        } catch (error) {
            next(error)
        }
    }
}