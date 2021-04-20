
import { Router } from 'express'
import { getCustomRepository } from 'typeorm';

import { SettingsRepository } from './Repositories/SettingsRepository';

const routes = Router();

// routes params => parametros de rotas
//http://localhost:3000/settings/1
//query params => filtros e buscas
//http://localhost:3000/settings/1?search=blabla

//body params => 

routes.post('/settings', async (req,res)=>{
  const {chat, username} = req.body;
  const settingsRepository = getCustomRepository(SettingsRepository);

  const settings= settingsRepository.create({
    chat,
    username
  })
  await settingsRepository.save(settings)  
})
export { routes }