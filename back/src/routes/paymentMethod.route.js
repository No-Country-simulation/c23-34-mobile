import {Router} from 'express';
import {PaymentMethodController} from '../controllers/paymentMethod.controller.js';

export const paymentMethodRoute = Router()
paymentMethodRoute.get('/',PaymentMethodController.getPaymentMethods)
paymentMethodRoute.get('/:id',PaymentMethodController.getPaymentMethodById)
paymentMethodRoute.post('/',PaymentMethodController.createPaymentMethod)
paymentMethodRoute.put('/:id',PaymentMethodController.updatePaymentMethod)
paymentMethodRoute.delete('/:id',PaymentMethodController.deletePaymentMethod)
