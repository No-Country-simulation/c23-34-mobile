import {PaymentService} from '../services/payment.service.js';

export class PaymentController{
    static async getPayments(req,res,next){
        try {
            const payments = await PaymentService.getPayments()
            res.status(200).json(payments)
        } catch (error) {
            next(error)
        }
    }
    static async getPaymentById(req,res,next){
        try {
            const {id} = req.params
            const payment = await PaymentService.getPaymentById({id})
            res.status(200).json(payment)
        } catch (error) {
            next(error)
        }
    }
    static async createPayment(req,res,next){
        try {
            const paymentBody = req.body
            const payment = await PaymentService.createPayment({paymentBody})
            res.status(201).json(payment)
        } catch (error) {
            next(error)
        }
    }
}