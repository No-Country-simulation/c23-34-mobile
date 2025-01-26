import {paymentMethodModel} from '../models/paymentMethod.model.js';
import {encryptData,decryptData} from '../utils/utils.js';

export class PaymentMethodService {
    static async getPaymentMethods(){
        const paymentMethods = await paymentMethodModel.find().lean().select('+cardNumber +cardCvv')
        if(paymentMethods.length == 0) throw new Error('There are no paymentMethods')
        const decryptPaymentMethods = paymentMethods.map((p)=>{
            p.cardNumber = decryptData(p.cardNumber)
            p.cardCvv = decryptData(p.cardCvv)
            return p
        })

        return decryptPaymentMethods
    }

    static async getPaymentMethodById({id}){
        const paymentMethod = await paymentMethodModel.findById(id).lean().select('+cardNumber +cardCvv')
        if(!paymentMethod) throw new Error('PaymentMethod no found')  
        Object.assign(paymentMethod,{
            cardNumber : decryptData(paymentMethod.cardNumber),
            cardCvv : decryptData(paymentMethod.cardCvv)
            })
        return paymentMethod
    }
    
    static async createPaymentMethod({pmBody}){
        const encryptCardNumber =  encryptData(pmBody.cardNumber)
        const encryptCardCvv = encryptData(pmBody.cardCvv)
        const paymentMethod = await paymentMethodModel.create({...pmBody, cardNumber: encryptCardNumber, cardCvv : encryptCardCvv})

        return {success: true, message : 'paymentMethod successfully created', paymentMethod}
    }

    static async updatePaymentMethod({id, pmBody}){   
        const encryptCardNumber = encryptData(pmBody.cardNumber)
        const encryptCardCvv = encryptData(pmBody.cardCvv)
        const paymentMethodUpdate = await paymentMethodModel.findByIdAndUpdate(id,{$set : {...pmBody, cardNumber : encryptCardNumber, cardCvv : encryptCardCvv}, new : true})
        if(!paymentMethodUpdate) throw new Error('PaymentMethod no found')

        return {success: true, message : 'paymentMethod successfully updated',paymentMethodUpdate}
    }

    static async deletePaymentMethod({id}){
        const paymentMethod = await paymentMethodModel.findByIdAndDelete(id)
        if(!paymentMethod) throw new Error('PaymentMethod no found')

        return {success: true, message : 'paymentMethod successfully deleted',paymentMethod}
    }
}