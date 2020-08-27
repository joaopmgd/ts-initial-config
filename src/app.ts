import express from 'express'
import { BuildRouter } from '@routes/Router'
import bodyParser from 'body-parser'
import { BuildUserController } from '@controllers/userController';
import { BuildUserService } from '@services/userService';
import { IUser } from '@db/models/user'

// inserçao de dados como se fosse a camada de DB
const users: IUser[] = [
    { id: "1", name: 'João', email: 'joao@gmail.com' },
    { id: "2", name: 'Pedro', email: 'pedro@gmail.com' }
]

interface ICreateApp {
    Start(port: number): Promise<void>
}

export async function CreateApp(): Promise<ICreateApp> {
    const httpServer = express()

    httpServer.use(bodyParser.urlencoded({ extended: true }))
    httpServer.use(bodyParser.json())

    const userService = BuildUserService(users)
    const userController = BuildUserController(userService)

    BuildRouter({
        userController,
        server: httpServer
    })

    function Start(port: number): Promise<void> {
        return new Promise((resolve, reject) => {
            httpServer.listen(port, () => {
                resolve()
            }).on('error', (err: object) => reject(err))
        })
    }

    return { Start }
}
