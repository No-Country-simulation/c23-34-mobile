import {AuthService} from '../services/auth.service.js';

export class AuthController{
    static async signUp(req,res,next){
        try {
            const authBody = req.body
            const auth = await AuthService.signUp({authBody})
            res.status(201).json(auth)
        } catch (error) {
            next(error)
        }
    }
    static async logIn(req,res,next){
        try {
            const authBody = req.body
            const auth = await AuthService.logIn({authBody})
            res.status(200).json(auth)
        } catch (error) {
            next(error)
        }
    }
}