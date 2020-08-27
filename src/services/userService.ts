import { User } from '@db/models/User'

export class UserService {

    private users: User[]

    constructor(users: User[]) {
        this.users = users
    }

    public readAll(): User[] {
        return this.users
    }

    public readOne(id: string): User | undefined {
        return this.users.find(x => x.id! === id)
    }

    public create({ name, email }: User): User {
        return new User(name, email)
    }

    public update({ id, name, email }: User): User | undefined {
        return this.users.find(x => x.id! === id)
    }

    public delete(id: string): User | undefined {
        return this.users.find(x => x.id! === id)
    }
}