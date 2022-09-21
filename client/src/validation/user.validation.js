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
    passwordValidation: (password) => {
        let innerPassword = password;
        let numberOfDigits = 0;
    
        for (let i = 0; i < innerPassword.length; i++) {
            if (!isNaN(innerPassword[i])) {
                numberOfDigits = numberOfDigits + 1;
            };
        };
    
        if (numberOfDigits >= 4) {
            return true;
        } else {
            return false;
        }
    },
    namePipe: (name) => {
        let incomingName = name.toLocaleLowerCase();
        return incomingName.charAt(0).toUpperCase() + incomingName.slice(1);
    },
    loginSchema: {
        email: Joi.string().email().regex(/^([A-Za-z0-9-._])+@([A-Za-z0-9-._])+\.(([A-Za-z]{2,5})|(co\.il)|(com))$/).lowercase().min(5).max(255).required(),
        password: Joi.string().regex(/^(?=.*[A-Z])(?=.*[a-z])(?=.*[\d])(?=.*[!@#$%^\-&_*])([A-Za-z\d!@#$%^\-&_*]{8,255})$/).min(8).max(255).required(),
    },
    updateSchema: {
    //     firstName: Joi.string().alphanum().min(2).max(255),
    //     lastName: Joi.string().alphanum().min(2).max(255),
    //     email: Joi.string().email().pattern(new RegExp("^([A-Za-z0-9-._])+@([A-Za-z0-9-._])+\.([A-Za-z]{2,5})|(co\.il)|(com)$")).lowercase().min(5).max(255),
    //     mobilePhone: Joi.string().pattern(new RegExp("^(05+[012345689]{1})+(\\d{7})$")).min(10).max(10),
    //     telephone: Joi.string().pattern(new RegExp("^(0+[23489]{1})+(\\d{7})$")).min(9).max(9),
    //     password: Joi.string().pattern(new RegExp("^(?=.*[A-Z])(?=.*[a-z])(?=.*[\\d])(?=.*[!@#$%^\\-&_*])([A-Za-z\\d!@#$%^\\-&_*]{8,255})$")).min(8).max(255)
    },
    forgotPasswordSchema: {
        email: Joi.string().email().regex(/^([A-Za-z0-9-._])+@([A-Za-z0-9-._])+\.(([A-Za-z]{2,5})|(co\.il)|(com))$/).lowercase().min(5).max(255).required(),
    },
    resetPasswordSchema: {
        password: Joi.string().regex(/^(?=.*[A-Z])(?=.*[a-z])(?=.*[\d])(?=.*[!@#$%^\-&_*])([A-Za-z\d!@#$%^\-&_*]{8,255})$/).min(8).max(255).required(),
        passwordRepeat: Joi.string().regex(/^(?=.*[A-Z])(?=.*[a-z])(?=.*[\d])(?=.*[!@#$%^\-&_*])([A-Za-z\d!@#$%^\-&_*]{8,255})$/).min(8).max(255).required(),
    },
};



export default userValidation;
// Joi.number().integer().min(1900).max(2013),
// biz: Joi.boolean().required(),