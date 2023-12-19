import { Router } from 'express';
import userController from './controller/user.controller'

const routes = new Router();

// สร้าง routing โดยใช้ HTTP GET 
routes.get("/", (req, res) => {
    const json = JSON.parse('{"test":"Hello World"}');
    res.send(json);
});


routes.post('/user', userController.createUser);
routes.get('/users', userController.findAllUsers);
routes.get('/user/:id', userController.findUserById);
routes.put('/user/:id', userController.updateUser);
routes.delete('/user/:id', userController.deleteUser);

export default routes;