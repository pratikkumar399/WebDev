import express from 'express';
import { registerController } from '../controller';


const router = express.Router();

router.post('/register', registerController.register)


export default router;