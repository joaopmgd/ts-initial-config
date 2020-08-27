import { UserService } from '@services/UserService'
import { Request, Response } from 'express'

export class UserController {

    private userService: UserService

    constructor(userService: UserService) {
        this.userService = userService
    }

    public async get(req: Request, res: Response) {
        res.json({
            message: this.userService.readOne('1')
        })
    }

    public async getAll(req: Request, res: Response) {
        res.json({
            message: this.userService.readAll()
        })
    }

    public async post(req: Request, res: Response) {
        res.json({
            message: this.userService.create({ name: 'Dias', email: 'dias@gmail.com' })
        })
    }

    public async put(req: Request, res: Response) {
        res.json({
            message: this.userService.update({ id: '1', name: 'Dias', email: 'dias@gmail.com' })
        })
    }

    public async delete(req: Request, res: Response) {
        res.json({
            message: this.userService.delete('1')
        })
    }
}
