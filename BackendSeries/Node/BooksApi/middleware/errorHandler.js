import { DEBUG_MODE } from '../config';
import { ValidationError } from 'joi';

const errorHanndler = (err, req, res, next) => {

    let statusCode = 500;
    let data = {
        message: "Internal Server Error",
        ...(DEBUG_MODE === 'true' && { originalError: err.message }),
    }

    if (err instanceof ValidationError) {
        // used for validation error
        statusCode = 422;
        data = {
            message: err.message,
        }
    }

    return res.status(statusCode).json(data);

}
export default errorHanndler;