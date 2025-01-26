import {serviceModel} from '../models/service.model.js';
import {userModel} from '../models/user.model.js';

export class ServiceS {
    static async getFavoriteServices({id}){
        const user = await userModel.findById(id).populate('userFavoriteServices._id')
        if(!user) throw new Error('User no found')
        if(user.userFavoriteServices.length == 0) throw new Error('there are no favoriteServices')
        
        return user.userFavoriteServices
    }
    
    static async getFavoriteServiceById({id,serviceId}){
        const user = await userModel.findById(id).populate('userFavoriteServices._id')
        if(!user) throw new Error ('User no found')
        const favoriteService = user.userFavoriteServices.find(s => s._id._id == serviceId)
        if(!favoriteService) throw new Error('FavoriteService no found')

        return favoriteService
    }

    static async createFavoriteService({id, fsBody}){
        //check if exists service
        let service = await serviceModel.findOne({serviceId: fsBody.serviceId})
        if(!service) {
            service =  await serviceModel.create(fsBody)
        }
        //check user has service
        const user = await userModel.findById(id)
        if(!user) throw new Error ('User no found')
        const isService = user.userFavoriteServices.some(s => s._id == service._id)
        if(isService) throw new Error('service is registered')
        //user add service
        user.userFavoriteServices.push({_id : service._id})
        await user.save()

        return {success:true, message : 'favoriteService successfully created',service}
    }

    static async deleteFavoriteService({id, serviceId}){
        let user = await userModel.findById(id)
        if(!user) throw new Error('User no found')
        
        user.userFavoriteServices = user.userFavoriteServices.filter( s => s._id != serviceId)
        await user.save()

        return {success:true, message : 'favoriteService successfully deleted', user}
    }
}