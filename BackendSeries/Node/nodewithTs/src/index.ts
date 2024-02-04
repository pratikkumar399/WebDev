import express, {Express , Request , Response} from 'express';
import dotenv from 'dotenv';

dotenv.config();
const app : Express = express();

const port = process.env.PORT || 4000;

app.get('/', (req : Request, res : Response) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`[server] : Server started on port ${port}`);
});

