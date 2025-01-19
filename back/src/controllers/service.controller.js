import {ServiceS} from '../services/service.service.js';

export class ServiceController{
    static async getFavoriteServices(req,res,next){
        try {
            const {id} = req.params
            const favoriteServices = await ServiceS.getFavoriteServices({id})
            res.status(200).json({success: true, favoriteServices})
        } catch (error) {
            next(error)
        }
    }
    static async getFavoriteServiceById(req,res,next){
        try {
            const {id,serviceId} = req.params
            const favoriteService = await ServiceS.getFavoriteServiceById({id,serviceId})
            res.status(200).json({success:true,favoriteService})
        } catch (error) {
            next(error)
        }
    }
    static async createFavoriteService(req,res,next){
        try {
            const {id} = req.params
            const fsBody = req.body
            const favoriteService = await ServiceS.createFavoriteService({id,fsBody})
            res.status(201).json({success:true,favoriteService})
        } catch (error) {
            next(error)
        }
    }
    static async deleteFavoriteService(req,res,next){
        try {
            const {id,serviceId} = req.params
            const favoriteService = await ServiceS.deleteFavoriteService({id,serviceId})
            res.status(200).json({success:true,favoriteService})
        } catch (error) {
            next(error)
        }
    }
}