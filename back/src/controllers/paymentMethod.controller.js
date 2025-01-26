import {PaymentMethodService} from '../services/paymentMethod.service.js';

export class PaymentMethodController{
    static async getPaymentMethods(req,res,next){
        try {
            const paymentMethods = await PaymentMethodService.getPaymentMethods()
            res.status(200).json(paymentMethods)
        } catch (error) {
            next(error)            
        }
    }
    static async getPaymentMethodById(req,res,next){
        try {
            const {id} = req.params
            const paymentMethod = await PaymentMethodService.getPaymentMethodById({id})
            res.status(200).json(paymentMethod)
        } catch (error) {
            next(error)
        }
    }
    static async createPaymentMethod(req,res,next){
        try {
            const pmBody = req.body
            const paymentMethod = await PaymentMethodService.createPaymentMethod({pmBody})
            res.status(201).json(paymentMethod)
        } catch (error) {
            next(error)
        }
    }
    static async updatePaymentMethod(req,res,next){
        try {
            const {id} = req.params
            const pmBody = req.body
            const paymentMethod = await PaymentMethodService.updatePaymentMethod({id,pmBody})
            res.status(200).json(paymentMethod)
        } catch (error) {
            next(error)
        }
    }
    static async deletePaymentMethod(req,res,next){
        try {
            const {id} = req.params
            const paymentMethod = await PaymentMethodService.deletePaymentMethod({id})
            res.status(200).json(paymentMethod)
        } catch (error) {
            next(error)
        }
    }
}