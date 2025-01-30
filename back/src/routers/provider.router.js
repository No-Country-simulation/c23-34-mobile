import {ProviderController} from '../controllers/provider.controller.js'; 
import {Router} from 'express';

export const providerRouter = Router()
providerRouter.get('/categories', ProviderController.getCategories)
providerRouter.get('/companies/:categoryId', ProviderController.getCompanies)
providerRouter.post('/services', ProviderController.suscribedToService)
providerRouter.post('/debts', ProviderController.servicesDebt)
providerRouter.get('/services/:id', ProviderController.getServices)
providerRouter.delete('/services/:id/service/:serviceId', ProviderController.deleteService)