import {Router} from 'express';
import {CardController} from '../controllers/card.controller.js';
import {validateSchema} from '../middlewares/validateSchema.js';
import {cardSchema} from '../schemas/card.schema.js';

export const cardRouter = Router()
cardRouter.get('/',CardController.getPaymentMethods)
cardRouter.get('/:id',CardController.getPaymentMethodById)
cardRouter.post('/', CardController.createPaymentMethod)
cardRouter.put('/:id',validateSchema(cardSchema), CardController.updatePaymentMethod)
cardRouter.delete('/:id',CardController.deletePaymentMethod)
