import app from './app'
import { Configuration } from './config/Configuration'

const port = Configuration.port

const server = new app().Start(port)
    .then(port => console.log(`Server running on port ${port}`))
    .catch(error => {
        console.log(error)
        process.exit(1);
    });

export default server;