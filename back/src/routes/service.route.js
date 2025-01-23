import {Router} from 'express';
import {ServiceController} from '../controllers/service.controller.js';
import {validateSchema} from '../middlewares/validateSchema.js';
import {serviceSchema} from '../schemas/service.schema.js';

export const serviceRoute = Router()
serviceRoute.get('/:id',ServiceController.getFavoriteServices)
serviceRoute.get('/:id/service/:serviceId',ServiceController.getFavoriteServiceById)
serviceRoute.post('/:id', validateSchema(serviceSchema),ServiceController.createFavoriteService)
serviceRoute.delete('/:id/service/:serviceId',ServiceController.deleteFavoriteService)
