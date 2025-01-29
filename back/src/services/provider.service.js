import {userModel} from '../models/user.model.js';
import {serviceModel} from '../models/service.model.js';
import {readJSON} from '../utils/utils.js';

export class ProviderService{
    //consumer_id es un identificador de la aplicacion brindada por la api
    static async getCategories(){

        const categoriesList =  readJSON('../data/categories.json') 
        if(categoriesList.length == 0) throw new Error('There are not categories')

        return categoriesList
    }
    static async getCompanies({categoryId}){
        const companiesList = readJSON('../data/companies.json')
        if(companiesList.length == 0) throw new Error('There are not cmpanies')

        return companiesList
    }
    static async suscribedToService({serviceBody}){
        //user add a service by number of identification, body: data service, service_id, user_id, user_identification
        const addService = true//validate service by ID
        if(!addService) throw new Error('ID no match with service')
        let service = await serviceModel.findOne({serviceId: serviceBody.serviceId})//si hay match add service in user array
        if(!service) service =  await serviceModel.create({}) 
        const user = await userModel.findById(serviceBody.user_id)
        if(!user) throw new Error('User no found')
        const isService = user.userFavoriteServices.some(s => s.id == service._id)//validate if user has service
        if(isService) throw new Error('service is registered')
        user.userFavoriteServices.push({id : service._id})
        await user.save()
        return {success: true, message : 'Service successfully suscribed', service}
    }
    static async servicesDebt({sdBody}){
        //return debts of user by service_id, craete filter
        const debtsList = readJSON('../data/debts.json')
        if(debtsList.length == 0) throw new Error('There are no debts')

        return debtsList
    }
}