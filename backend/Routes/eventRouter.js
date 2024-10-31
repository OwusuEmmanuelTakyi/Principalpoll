import express from 'express';
import { createEvent, deleteEvent, getEvent, getEvents, updateEvent } from '../Controllers/eventController.js';

const eventRouter = express.Router();

eventRouter.get('/events',getEvents);
eventRouter.get('/events/:id',getEvent);
eventRouter.post('/events',createEvent);
eventRouter.put('/events/:id',updateEvent);
eventRouter.get('/events/:id',deleteEvent);

export default eventRouter;