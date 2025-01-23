import {Router} from 'express';
import {PaymentController} from '../controllers/payment.controller.js';
import {validateSchema} from '../middlewares/validateSchema.js';
import {paymentSchema} from '../schemas/payment.schema.js';

export const paymentRouter = Router()
paymentRouter.get('/',PaymentController.getPayments)
paymentRouter.get('/:id',PaymentController.getPaymentById)
paymentRouter.post('/',validateSchema(paymentSchema),PaymentController.createPayment)