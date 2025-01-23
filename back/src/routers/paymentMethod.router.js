import {Router} from 'express';
import {PaymentMethodController} from '../controllers/paymentMethod.controller.js';
import {validateSchema} from '../middlewares/validateSchema.js';
import {paymentMethodSchema} from '../schemas/paymentMethod.schema.js';

export const paymentMethodRoute = Router()
paymentMethodRoute.get('/',PaymentMethodController.getPaymentMethods)
paymentMethodRoute.get('/:id',PaymentMethodController.getPaymentMethodById)
paymentMethodRoute.post('/',validateSchema(paymentMethodSchema), PaymentMethodController.createPaymentMethod)
paymentMethodRoute.put('/:id',validateSchema(paymentMethodSchema), PaymentMethodController.updatePaymentMethod)
paymentMethodRoute.delete('/:id',PaymentMethodController.deletePaymentMethod)
