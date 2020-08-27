import { IUser, BuildUser, UserOptions } from '@db/models/user'
import { Nullable } from '@@types/index'

export interface IUserService {
    readAll(): IUser[]
    readOne(id: string): Nullable<IUser>
    create({ name, email }: UserOptions): IUser
    update({ id, name, email }: IUser): Nullable<IUser>
    remove(id: string): Nullable<IUser>
}

export function BuildUserService(users: IUser[]): IUserService {

    function readAll(): IUser[] {
        return users
    }

    function readOne(id: string): Nullable<IUser> {
        return users.find(x => x.id! === id)
    }

    function create({ name, email }: UserOptions): IUser {
        return BuildUser({ name, email })
    }

    function update({ id, name, email }: IUser): Nullable<IUser> {
        return users.find(x => x.id! === id)
    }

    function remove(id: string): Nullable<IUser> {
        return users.find(x => x.id! === id)
    }

    return { readAll, readOne, create, update, remove }
}
