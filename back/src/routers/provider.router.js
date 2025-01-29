import {ProviderController} from '../controllers/provider.controller.js'; 
import {Router} from 'express';

export const providerRouter = Router()
providerRouter.get('/categories', ProviderController.getCategories)
providerRouter.get('/companies/:categoryId', ProviderController.getCompanies)
providerRouter.post('/service', ProviderController.suscribedToService)
providerRouter.post('/debts', ProviderController.servicesDebt)