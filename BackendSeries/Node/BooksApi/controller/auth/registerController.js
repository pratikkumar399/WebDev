import Joi from "joi";

const registerController = {
    register(req, res, next) {
        // logic for register controller
        // we are using joi for validation  https://joi.dev/api/?v=17.4.0
        // validation 
        const registerSchema = Joi.object({
            name: Joi.string().min(3).max(30).required(),
            email: Joi.string().email().required(),
            password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required(),
            repeat_password: Joi.ref('password'),
        });

        const { error } = registerSchema.validate(req.body);
        if (error) {
            return next(error);
        }
    }
}

export default registerController;