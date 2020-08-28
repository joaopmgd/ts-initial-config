import { CreateApp } from './app'
import { Configs } from './config/configuration'

const port = Configs.port

async function run() {
    const app = await CreateApp()
    await app.Start(port)
    console.log(`Server running on port ${port}`)
}

run()
