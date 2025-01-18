import {serviceModel} from '../models/service.model.js';
import {userModel} from '../models/user.model.js';

export class ServiceS {
    static async getFavoriteServices({id}){
        const user = await userModel.findById(id).populate('favoriteServices')
        if(!user) throw new Error('no user found')
        if(user.favoriteServices.length == 0) throw new Error('there are no favoriteServices')
        
        return user.favoriteServices
    }
    
    static async getFavoriteServiceById({serviceId}){
        const favoriteService = await serviceModel.findOne({serviceId})
        if(!favoriteService) throw new Error('no favoriteService found')

        return favoriteService
    }

    static async createFavoriteService({fsBody}){
        const {id, serviceId, serviceName, serviceDescription, serviceCategory, serviceDateCreated } = fsBody
        const service = await serviceModel.findOne({serviceId})
        //create service
        if(!service) {
            await serviceModel.create({serviceId,serviceName,serviceDescription,serviceCategory,serviceDateCreated})
            console.log('new service created');
        }
        //check user has service
        const user = await userModel.findById(id)
        const isService = user.favoriteServices.some(s => s.serviceId == serviceId)
        if(isService) throw new Error('service is register')
        //user add service
        user.favoriteServices.push({serviceId})
        await user.save()

        return {message : 'favoriteService successfully created',service}
    }

    static async deleteFavoriteService({id, serviceId}){
        let user = await userModel.findById(id)
        if(!user) throw new Error('user no found')
        
        user.favoriteServices = user.favoriteServices.filter( s => s.serviceId != serviceId)
        await user.save()

        return {message : 'favoriteService successfully deleted', user}
    }
}