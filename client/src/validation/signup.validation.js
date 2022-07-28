import Joi from 'joi-browser';

const signupSchema = {
    firstName: Joi.string().required().alphanum().min(2).max(255),
    lastName: Joi.string().required().alphanum().min(2).max(255),
    email: Joi.string().required().email().lowercase().min(5).max(255),
    mobilePhone: Joi.string().required().min(10).max(10),
    telephone: Joi.string().min(9).max(9),
    password: Joi.string().required().min(8).max(255),
    passwordRepeat: Joi.string().required().min(8).max(255),
    profileImg: Joi.string().min(5).max(255).allow(null, ''),
};

export default signupSchema;