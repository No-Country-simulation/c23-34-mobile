import {ProviderController} from '../controllers/provider.controller.js'; 
import {Router} from 'express';

export const providerRouter = Router()
providerRouter.get('/categories', ProviderController.getCategories)
providerRouter.get('/companies/:categoryId', ProviderController.getCompanies)
providerRouter.post('/suscribed', ProviderController.suscribedToService)
providerRouter.post('/debts', ProviderController.servicesDebt)