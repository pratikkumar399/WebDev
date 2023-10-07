import express from 'express';
import { APP_PORT } from './config';
import router from './routes';


const app = express();
app.use('/api', router);



app.listen(APP_PORT, () => {
    console.log(`Server is listening on ${APP_PORT}`);
}); 