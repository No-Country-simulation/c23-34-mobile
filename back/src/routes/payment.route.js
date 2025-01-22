import {Router} from 'express';
import {PaymentController} from '../controllers/payment.controller.js';

export const paymentRoute = Router()
paymentRoute.get('/',PaymentController.getPayments)
paymentRoute.get('/:id',PaymentController.getPaymentById)
paymentRoute.create('/',PaymentController.createPayment)