import {paymentModel} from '../models/payment.model.js';
import {formatDate} from '../utils/utils.js';

export class PaymentService{
    static async getPayments(){
        let payments = await paymentModel.find().lean()
        if(payments.length == 0 ) throw new Error('There are no payments')
        payments = payments.map(p => {
        p.paymentDateCreated = formatDate(p.paymentDateCreated)
        return p
        })

        return payments
    }

    static async getPaymentById({id}){
        const payment = await paymentModel.findById(id).lean().populate(['userId','serviceId','paymentMethodId'])
        if(!payment) throw new Error('Payment no found')

        return {...payment, paymentDateCreated : formatDate(payment.paymentDateCreated)}
    }

    static async createPayment({paymentBody}){
        const payment = await paymentModel.create(paymentBody)

        return {success: true, message : 'Payment successfully created', payment}
    }
}