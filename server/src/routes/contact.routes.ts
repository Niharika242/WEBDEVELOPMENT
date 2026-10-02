import { Router } from 'express';
import { createContact } from '../controllers/contact.controller.js';
import { contactRateLimit } from '../middleware/rate-limit.js';

export const contactRouter = Router();

contactRouter.post('/', contactRateLimit, createContact);
