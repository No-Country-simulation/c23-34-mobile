import {cardModel} from '../models/card.model.js';

export class CardService {
    static async getCards(){
        const cards = await cardModel.find()
        if(cards.length == 0) throw new Error('There are no paymentMethods')

        return cards
    }

    static async getCard({id}){
        const card = await cardModel.findById(id)
        if(!card) throw new Error('PaymentMethod no found')  
        return card
    }
    
    static async creatCard({pmBody}){
        const {token, userId} = pmBody 
        await cardModel.create({token, userId}) 

        return {success: true, message : 'paymentMethod successfully created'}
    }

    static async updateCard({id, pmBody}){   
        const updatedCard = await cardModel.findByIdAndUpdate(id,{$set : pmBody, new : true})
        if(!updatedCard) throw new Error('PaymentMethod no found')

        return {success: true, message : 'paymentMethod successfully updated'}
    }

    static async deletePaymentMethod({id}){
        const deletedCard = await cardModel.findByIdAndDelete(id)
        if(!deletedCard) throw new Error('PaymentMethod no found')

        return {success: true, message : 'paymentMethod successfully deleted'}
    }
}