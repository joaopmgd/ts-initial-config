import { IUserService } from '@services/userService'
import { Request, Response } from 'express'

export interface IUserController {
    getAll(req: Request, res: Response): void
    get(req: Request, res: Response): void
    post(req: Request, res: Response): void
    put(req: Request, res: Response): void
    delete(req: Request, res: Response): void
}

export function BuildUserController(userService: IUserService): IUserController {

    function getAll(req: Request, res: Response): void {
        res.json({
            message: userService.readAll()
        })
    }

    function get(req: Request, res: Response): void {
        res.json({
            message: userService.readOne('1')
        })
    }

    function post(req: Request, res: Response): void {
        res.json({
            message: userService.create({ name: 'Dias', email: 'dias@gmail.com' })
        })
    }

    function put(req: Request, res: Response): void {
        res.json({
            message: userService.update({ id: '1', name: 'Dias', email: 'dias@gmail.com' })
        })
    }

    function del(req: Request, res: Response): void {
        res.json({
            message: userService.remove('1')
        })
    }

    return { getAll, get, post, put, delete: del }
}
