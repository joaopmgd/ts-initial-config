const MIN = 0;
const MAX = 100;

export type IUser = {
    id: string,
    name: string,
    email: string
}

export type UserOptions = {
    name: string
    email: string
}

export function BuildUser(options: UserOptions): IUser {
    const n = Math.floor(Math.random() * (MAX - MIN)) + MIN
    const id = n.toString()

    return { id, name: options.name, email: options.email }
}