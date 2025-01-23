import {Router} from 'express';
import {ServiceController} from '../controllers/service.controller.js';
import {validateSchema} from '../middlewares/validateSchema.js';
import {serviceSchema} from '../schemas/service.schema.js';

export const serviceRouter = Router()
serviceRouter.get('/:id',ServiceController.getFavoriteServices)
serviceRouter.get('/:id/service/:serviceId',ServiceController.getFavoriteServiceById)
serviceRouter.post('/:id', validateSchema(serviceSchema),ServiceController.createFavoriteService)
serviceRouter.delete('/:id/service/:serviceId',ServiceController.deleteFavoriteService)
