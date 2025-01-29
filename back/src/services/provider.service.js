import {userModel} from '../models/user.model.js';
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
        if(companiesList.length == 0) throw new Error('There are not companies')
        const filterCompanies = companiesList.filter(c => c.category.id == categoryId)
        return filterCompanies
    }
    static async suscribedToService({serviceBody}){
        //body: userId, serviceId, clientId
        const {serviceId, clientId, userId} = serviceBody
        //get companies 
        const companiesList = readJSON('../data/companies.json')
        if(companiesList.length == 0) throw new Error('There are not companies')
        //get service by serviceId
        const service = companiesList.find(s => s.serviceId == serviceId)
        if(!service) throw new Error('Service no found')
        //validate clientId
        const isClienteId = service.registeredUsers.some(c => c.clientId == clientId)
        if(!isClienteId) throw new Error('Client_ID no is registered') 
        //get user and validate if user has service
        const user = await userModel.findById(userId)
        if(!user) throw new Error('User no found')
        const isService = user.userFavoriteServices.some(s => s.serviceId == serviceId)
        if(isService) throw new Error('service is registered')
        user.userFavoriteServices.push({serviceId})
        await user.save()
        return {success: true, message : 'suscribed success to service', user}
    }
    static async servicesDebt({sdBody}){
        const {serviceId} = sdBody
        const debtsList = readJSON('../data/debts.json')
        if(debtsList.length == 0) throw new Error('There are no debts')
        const filterDebts = debtsList.filter(d => d.company.serviceId == serviceId)
        if(!filterDebts) throw new Error('Thre are not debts')
        return  filterDebts
    } 
}