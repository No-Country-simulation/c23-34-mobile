import {paymentModel} from '../models/payment.model.js';

export class PaymentService{
    static async getPayments(){
        const payments = await paymentModel.find()
        if(payments.length == 0 ) throw new Error('There are no payments')
        
        return payments
    }

    static async getPaymentById({id}){
        const payment = await paymentModel.findById(id)
        if(!payment) throw new Error('Payment no found')

        return payment
    }

    static async createPayment({paymentBody}){
        const payment = await paymentModel.create(paymentBody)

        return {success: true, message : 'Payment successfully created', payment}
    }
}