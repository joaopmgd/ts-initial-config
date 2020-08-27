import express from 'express'
import UserController from '@controllers/UserController'
import cors from 'cors'

class Router {

    constructor(server: express.Express) {

        // Create a router
        const router = express.Router()

        // ---------------
        //      USERS
        // ---------------
        //create a new user
        router.post('/users', UserController.post)
        //get all users
        router.get('/users', UserController.getAll)
        //get one user by id
        router.get('/users/:id', UserController.get)
        //update cat
        router.put('/users/:id', UserController.put)
        //delete a user
        router.delete('/users/:id', UserController.delete)

        router.options('*', cors());
        server.use('/', router)
    }
}

export default Router;