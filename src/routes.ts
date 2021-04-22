
import { Router } from 'express'
import { SettingsController } from './controllers/SettingsController';
import { UsersController } from './controllers/UsersController';
import { MessagesController} from './controllers/MessagesController';

const routes = Router();

// routes params => parametros de rotas
//http://localhost:3000/settings/1
//query params => filtros e buscas
//http://localhost:3000/settings/1?search=blabla

//body params => 

const settingsController = new SettingsController();
const usersController = new UsersController();
const messagesController = new MessagesController();

routes.post('/settings', settingsController.create);
routes.post('/users', usersController.create);
routes.post('/messages', messagesController.create)
routes.get('/messages/:id', messagesController.showByUser)
export { routes }