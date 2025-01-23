import {Router} from 'express';
import {PaymentController} from '../controllers/payment.controller.js';
import {validateSchema} from '../middlewares/validateSchema.js';
import {paymentSchema} from '../schemas/payment.schema.js';

export const paymentRoute = Router()
paymentRoute.get('/',PaymentController.getPayments)
paymentRoute.get('/:id',PaymentController.getPaymentById)
paymentRoute.post('/',validateSchema(paymentSchema),PaymentController.createPayment)