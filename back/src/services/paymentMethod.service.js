import {paymentMethodModel} from '../models/paymentMethod.model.js';
import {encryptData,decryptData} from '../utils/utils.js';

export class PaymentMethodService {
    static async getPaymentMethods(){
        const paymentMethods = await paymentMethodModel.find().select('+cardNumber')
        if(paymentMethods.length == 0) throw new Error('There are no paymentMethods')
        const decryptPaymentMethods = paymentMethods.map((py)=>{
            return {...py, cardNumber : decryptData(py.cardNumber)}
        })

        return decryptPaymentMethods
    }

    static async getPaymentMethodById({id}){
        const paymentMethod = await paymentMethodModel.findById(id).select('+cardNumber')
        if(!paymentMethod) throw new Error('No paymentMethod found')    

        return {...paymentMethod, cardNumber: decryptData(paymentMethod.cardNumber)}
    }
    
    static async createPaymentMethod({pmBody}){
        const encryptCardNumber =  encryptData(pmBody.cardNumber)
        const paymentMethod = await paymentMethodModel.create({...pmBody, cardNumber: encryptCardNumber})
        console.log(paymentMethod);

        return {message : 'paymentMethod successfully created', paymentMethod}
    }

    static async updatePaymentMethod({id, pmBody}){
        const paymentMethod = await paymentMethodModel.findById(id).select('+cardNumber')
        if(!paymentMethod) throw new Error('No paymentMethod found')        
        const encryptCardNumber = encryptData(pmBody.cardNumber)
        const paymentMethodUpdate = await paymentMethodModel.updateOne({_id : id},{$set : {...pmBody, cardNumber : encryptCardNumber}})
        console.log(paymentMethodUpdate);

        return {message : 'paymentMethod successfully updated',paymentMethodUpdate}
    }

    static async deletePaymentMethod({id}){
        const paymentMethod = await paymentMethodModel.findByIdAndDelete(id)
        console.log(paymentMethod);

        return {message : 'paymentMethod successfully deleted',paymentMethod}
    }
}