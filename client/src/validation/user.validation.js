import Joi from 'joi-browser';

const userValidation = {
    signupSchema: {
        firstName: Joi.string().alphanum().min(2).max(255).required(),
        lastName: Joi.string().alphanum().min(2).max(255).required(),
        email: Joi.string().email().regex(/^([A-Za-z0-9-._])+@([A-Za-z0-9-._])+\.(([A-Za-z]{2,5})|(co\.il)|(com))$/).lowercase().min(5).max(255).required(),
        mobilePhone: Joi.string().regex(/^(05+[012345689]{1})+(-?)+(\d{7})$/).min(10).max(11).required(),
        telephone: Joi.string().regex(/^(0+[23489]{1})+(-?)+(\d{7})$/).min(9).max(10).allow(''),
        password: Joi.string().regex(/^(?=.*[A-Z])(?=.*[a-z])(?=.*[\d])(?=.*[!@#$%^\-&_*])([A-Za-z\d!@#$%^\-&_*]{8,255})$/).min(8).max(255).required(),
        passwordRepeat: Joi.string().regex(/^(?=.*[A-Z])(?=.*[a-z])(?=.*[\d])(?=.*[!@#$%^\-&_*])([A-Za-z\d!@#$%^\-&_*]{8,255})$/).min(8).max(255).required(),
    },
    loginSchema: {
        email: Joi.string().email().regex(/^([A-Za-z0-9-._])+@([A-Za-z0-9-._])+\.(([A-Za-z]{2,5})|(co\.il)|(com))$/).lowercase().min(5).max(255).required(),
        password: Joi.string().regex(/^(?=.*[A-Z])(?=.*[a-z])(?=.*[\d])(?=.*[!@#$%^\-&_*])([A-Za-z\d!@#$%^\-&_*]{8,255})$/).min(8).max(255).required(),
    }
};



export default userValidation;


// Joi.number().integer().min(1900).max(2013),
// biz: Joi.boolean().required(),