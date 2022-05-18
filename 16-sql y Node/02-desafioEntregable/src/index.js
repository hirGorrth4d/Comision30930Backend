import server from './services/server';
//import {initMongoDB} from './services/database';

// const init = async () => {
//   await initMongoDB();
// }
// init();

const puerto = 8080;
server.listen(puerto, () => console.log(`SERVER UP ON PORT ${puerto}`));
//cuando use mongo, estas dos lineas van dentro de init()