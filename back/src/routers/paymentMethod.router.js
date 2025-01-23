import {Router} from 'express';
import {PaymentMethodController} from '../controllers/paymentMethod.controller.js';
import {validateSchema} from '../middlewares/validateSchema.js';
import {paymentMethodSchema} from '../schemas/paymentMethod.schema.js';

export const paymentMethodRouter = Router()
paymentMethodRouter.get('/',PaymentMethodController.getPaymentMethods)
paymentMethodRouter.get('/:id',PaymentMethodController.getPaymentMethodById)
paymentMethodRouter.post('/',validateSchema(paymentMethodSchema), PaymentMethodController.createPaymentMethod)
paymentMethodRouter.put('/:id',validateSchema(paymentMethodSchema), PaymentMethodController.updatePaymentMethod)
paymentMethodRouter.delete('/:id',PaymentMethodController.deletePaymentMethod)
