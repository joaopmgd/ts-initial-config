import { Request, Response } from 'express'
import { User } from '@models/User'

const users: User[] = [
    { name: 'João', email: 'joao@gmail.com' },
    { name: 'Pedro', email: 'pedro@gmail.com' }
]

export default {
    async get(req: Request, res: Response) {
        return res.json(users)
    }
}
