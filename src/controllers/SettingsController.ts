import { Request, Response } from 'express';
import { SettingsService } from '../services/SettingsService';

class SettingsController {
  async create(request: Request, response: Response) {
    const { chat, username } = request.body;

    const settingsServices = new SettingsService();

    try {
      const settings = await settingsServices.create({ chat, username })
      
      return response.json(settings)
    } catch (error) {
      return response.status(400).json({message: error.message})
    }

  }
}

export { SettingsController }