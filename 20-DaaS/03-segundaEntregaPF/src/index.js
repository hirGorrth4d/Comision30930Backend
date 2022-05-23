import server from './services/server';
import 'dotenv/config';
import {initMongoDB} from './services/database';

 const init = async () => {
  
  await initMongoDB();

  const puerto = process.env.PORT || 8080;

  server.listen(puerto, () => console.log(`SERVER UP ON PORT ${puerto}`));

 }
 init();
