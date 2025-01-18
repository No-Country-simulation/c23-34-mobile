import {paymentMethodModel} from '../models/paymentMethod.model.js';

export class PaymentMethodService {
    static async getPaymentMethods(){
        const paymentMethods = await paymentMethodModel.find()
        if(!paymentMethods) throw new Error('No paymentMethos found')
        return paymentMethods
    }

    static async getPaymentMethodById({id}){
        const paymentMethod = await paymentMethodModel.findById(id)
        if(!paymentMethod) throw new Error('No paymentMethod found')    
        return paymentMethod
    }
    
    static async createPaymentMethod({pmBpdy}){

    }
}