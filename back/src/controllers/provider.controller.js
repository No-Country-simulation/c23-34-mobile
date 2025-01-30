import {ProviderService} from '../services/provider.service.js';

export class ProviderController{
    static async getCategories(req,res,next){
        try {
            const categories = await ProviderService.getCategories()
            res.status(200).json(categories)    
        } catch (error) {
            next(error)
        }
    }
    static async getCompanies(req,res,next){
        try {
            const {categoryId} = req.params
            const companies = await ProviderService.getCompanies({categoryId})
            res.status(200).json(companies)
        } catch (error) {
            next(error) 
        }
    }
    static async suscribedToService(req,res,next){
        try {
            const serviceBody = req.body
            const service = await ProviderService.suscribedToService({serviceBody})
            res.status(201).json(service)
        } catch (error) {
            next(error)
        }
    }
    static async servicesDebt(req,res,next){
        try {
            const sdBody= req.body
            const debts = await ProviderService.servicesDebt({sdBody})
            res.status(200).json(debts)
        } catch (error) {
            next(error)
        }
    }
    static async getServices(req,res,next){
        try {
            const {id} = req.params
            const services = await ProviderService.getServices({id})
            res.status(200).json(services)
        } catch (error) {
            next(error)
        }
    }
    static async deleteService(req,res,next){
        try {
            const {id,serviceId} = req.params
            const user = await ProviderService.deleteService({id,serviceId})
            return res.status(200).json(user)
        } catch (error) {
            next(error)
        }
    }
}