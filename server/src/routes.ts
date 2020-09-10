import express from 'express';
import UsersController from './controllers/UsersController';

const routes = express.Router();
const usersControlers = new UsersController();

routes.post('/users', usersControlers.create);
routes.get('/users', usersControlers.index);
routes.delete('/users/:id', usersControlers.delete);
routes.put('/users/:id', usersControlers.edit);

export default routes;