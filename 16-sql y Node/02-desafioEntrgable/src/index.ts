import { initDb, initMsgDb } from './services/databases'
import server from './services/server'



const init = async () => {
    await initDb()
    await initMsgDb()
    const port = 8080
    server.listen(port, () => console.log("READY"))
}

init();