import {Router} from 'express';
import {ServiceController} from '../controllers/service.controller.js';

export const serviceRoute = Router()
serviceRoute.get('/:id',ServiceController.getFavoriteServices)
serviceRoute.get('/:id/service/:serviceId',ServiceController.getFavoriteServiceById)
serviceRoute.post('/:id',ServiceController.createFavoriteService)
serviceRoute.delete('/:id/service/:serviceId',ServiceController.deleteFavoriteService)
