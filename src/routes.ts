
import { Router } from 'express'
import { SettingsController } from './controllers/SettingsControler';

const routes = Router();

// routes params => parametros de rotas
//http://localhost:3000/settings/1
//query params => filtros e buscas
//http://localhost:3000/settings/1?search=blabla

//body params => 

const settingsController = new SettingsController();
routes.post('/settings', settingsController.create)

export { routes }