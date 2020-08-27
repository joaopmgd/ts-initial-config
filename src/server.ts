import { CreateApp } from './app'
import { Configuration } from './config/Configuration'

const port = Configuration.port

async function run() {
    const app = await CreateApp()
    await app.Start(port)
    console.log(`Server running on port ${port}`)
}

run()
