import { Request, Response } from 'express'
import { User } from '@models/User'

const users: User[] = [
    { name: 'João', email: 'joao@gmail.com' },
    { name: 'Pedro', email: 'pedro@gmail.com' }
]

export default {
    async get(req: Request, res: Response) {
        res.json({
            message: `NOT IMPLEMENTED YET.`
        })
    },
    async getAll(req: Request, res: Response) {
        return res.json(users)
    },
    async post(req: Request, res: Response) {
        res.json({
            message: `NOT IMPLEMENTED YET.`
        })
    },
    async put(req: Request, res: Response) {
        res.json({
            message: `NOT IMPLEMENTED YET.`
        })
    },
    async delete(req: Request, res: Response) {
        res.json({
            message: `NOT IMPLEMENTED YET.`
        })
    }
}
