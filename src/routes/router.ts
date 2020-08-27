import express from 'express'
import cors from 'cors'
import { IUserController } from '@controllers/userController'

export type BuildRouterOptions = {
    server: express.Express,
    userController: IUserController
}

export function BuildRouter(options: BuildRouterOptions) {

    const router = express.Router()

    // ---------------
    //      USERS
    // ---------------
    router.post('/users', options.userController.post)
    router.get('/users', options.userController.getAll)
    router.get('/users/:id', options.userController.get)
    router.put('/users/:id', options.userController.put)
    router.delete('/users/:id', options.userController.delete)

    router.options('*', cors());
    options.server.use('/', router)
}
