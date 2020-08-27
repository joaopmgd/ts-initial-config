import express from 'express'
import cors from 'cors'
import { UserController } from '@controllers/UserController'

class Router {

    private userController: UserController

    constructor(server: express.Express, userController: UserController) {

        // Create a router
        const router = express.Router()

        this.userController = userController

        // ---------------
        //      USERS
        // ---------------
        //create a new user
        router.post('/users', this.userController.post)
        //get all users
        router.get('/users', this.userController.getAll)
        //get one user by id
        router.get('/users/:id', this.userController.get)
        //update cat
        router.put('/users/:id', this.userController.put)
        //delete a user
        router.delete('/users/:id', this.userController.delete)

        router.options('*', cors());
        server.use('/', router)
    }
}

export default Router