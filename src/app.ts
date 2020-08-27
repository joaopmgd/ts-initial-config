import express from 'express'
import Router from '@routes/router'
import bodyParser from 'body-parser'
import { UserController } from '@controllers/UserController';
import { UserService } from '@services/UserService';
import { User } from '@db/models/User'

// inserçao de dados como se fosse a camada de DB
const users: User[] = [
    { id: "1", name: 'João', email: 'joao@gmail.com' },
    { id: "2", name: 'Pedro', email: 'pedro@gmail.com' }
]

class App {

    private httpServer: any

    constructor() {

        this.httpServer = express()
        this.httpServer.use(bodyParser.urlencoded({ extended: true }))
        this.httpServer.use(bodyParser.json())

        const userService = new UserService(users)
        const userController = new UserController(userService)

        new Router(this.httpServer, userController)
    }

    public Start = (port: number) => {
        return new Promise((resolve, reject) => {

            this.httpServer.listen(
                port,
                () => {
                    resolve(port)
                })
                .on('error', (err: object) => reject(err))
        })
    }
}

export default App
