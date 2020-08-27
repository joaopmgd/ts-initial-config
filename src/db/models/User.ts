
const min = Math.ceil(0);
const max = Math.floor(100);


export class User {
    id?: string
    name: string
    email: string

    constructor(name: string, email: string) {
        const n = Math.floor(Math.random() * (max - min)) + min
        this.id = n.toString()
        this.name = name
        this.email = email
    }
}