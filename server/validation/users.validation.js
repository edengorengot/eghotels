const Joi = require('joi');

const validateUsersSchema = Joi.object({
    firstName: Joi.string().required().alphanum().min(2).max(255),
    lastName: Joi.string().required().alphanum().min(2).max(255),
    email: Joi.string().required().email().pattern(new RegExp("^([A-Za-z0-9-._])+@([A-Za-z0-9-._])+\.([A-Za-z]{2,5})|(co\.il)|(com)$")).lowercase().min(5).max(255),
    mobilePhone: Joi.string().required().pattern(new RegExp("^(05+[012345689]{1})+(\\d{7})$")).min(10).max(10),
    telephone: Joi.string().optional().pattern(new RegExp("^(0+[23489]{1})+(\\d{7})$")).min(9).max(9),
    password: Joi.string().required().pattern(new RegExp("^(?=.*[A-Z])(?=.*[a-z])(?=.*[\\d])(?=.*[!@#$%^\\-&_*])([A-Za-z\\d!@#$%^\\-&_*]{8,255})$")).min(8).max(255),
});

const passwordVerification = (password) => {
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
    };
};

const validateLoginUsersSchema = Joi.object({
    email: Joi.string().required().email().pattern(new RegExp("^([A-Za-z0-9-._])+@([A-Za-z0-9-._])+\.([A-Za-z]{2,5})|(co\.il)|(com)$")).lowercase().min(5).max(255),
    password: Joi.string().required().pattern(new RegExp("^(?=.*[A-Z])(?=.*[a-z])(?=.*[\\d])(?=.*[!@#$%^\\-&_*])([A-Za-z\\d!@#$%^\\-&_*]{8,255})$")).min(8).max(255),
});

const validateUpdateUsersSchema = Joi.object({
    firstName: Joi.string().optional().alphanum().min(2).max(255),
    lastName: Joi.string().optional().alphanum().min(2).max(255),
    email: Joi.string().optional().email().pattern(new RegExp("^([A-Za-z0-9-._])+@([A-Za-z0-9-._])+\.([A-Za-z]{2,5})|(co\.il)|(com)$")).lowercase().min(5).max(255),
    mobilePhone: Joi.string().optional().pattern(new RegExp("^(05+[012345689]{1})+(\\d{7})$")).min(10).max(10),
    telephone: Joi.string().optional().pattern(new RegExp("^(0+[23489]{1})+(\\d{7})$")).min(9).max(9),
    password: Joi.string().optional().pattern(new RegExp("^(?=.*[A-Z])(?=.*[a-z])(?=.*[\\d])(?=.*[!@#$%^\\-&_*])([A-Za-z\\d!@#$%^\\-&_*]{8,255})$")).min(8).max(255),
    admin: Joi.number().optional().min(0).max(3),
    favoriteHotels: Joi.array().optional().items(Joi.string().min(4).max(10)),
    reservations: Joi.array().optional().items(Joi.string().min(5).max(10)),
    clubPoints: Joi.number().optional().min(0).max(10000),
    preferences: Joi.object().optional()
});

const validateResetPasswordSchema = Joi.object({
    email: Joi.string().required().email().pattern(new RegExp("^([A-Za-z0-9-._])+@([A-Za-z0-9-._])+\.([A-Za-z]{2,5})|(co\.il)|(com)$")).lowercase().min(5).max(255),
});

module.exports = {
    validateUsersSchema,
    passwordVerification,
    validateLoginUsersSchema,
    validateUpdateUsersSchema,
    validateResetPasswordSchema
};