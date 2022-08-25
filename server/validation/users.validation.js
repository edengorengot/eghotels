const Joi = require('joi');

const validateUsersSchema = Joi.object({
    firstName: Joi.string().required().alphanum().min(2).max(255),
    lastName: Joi.string().required().alphanum().min(2).max(255),
    email: Joi.string().required().email().pattern(new RegExp("^([A-Za-z0-9-._])+@([A-Za-z0-9-._])+\.([A-Za-z]{2,5})|(co\.il)|(com)$")).lowercase().min(5).max(255),
    mobilePhone: Joi.string().required().pattern(new RegExp("^(05+[012345689]{1})+(\\d{7})$")).min(10).max(10),
    telephone: Joi.string().optional().pattern(new RegExp("^(0+[23489]{1})+(\\d{7})$")).min(9).max(9),
    password: Joi.string().required().pattern(new RegExp("^(?=.*[A-Z])(?=.*[a-z])(?=.*[\\d])(?=.*[!@#$%^\\-&_*])([A-Za-z\\d!@#$%^\\-&_*]{8,255})$")).min(8).max(255),
});

const validateUpdateUsersSchema = Joi.object({
    firstName: Joi.string().alphanum().min(2).max(255),
    lastName: Joi.string().alphanum().min(2).max(255),
    email: Joi.string().email().pattern(new RegExp("^([A-Za-z0-9-._])+@([A-Za-z0-9-._])+\.([A-Za-z]{2,5})|(co\.il)|(com)$")).lowercase().min(5).max(255),
    mobilePhone: Joi.string().pattern(new RegExp("^(05+[012345689]{1})+(\\d{7})$")).min(10).max(10),
    telephone: Joi.string().pattern(new RegExp("^(0+[23489]{1})+(\\d{7})$")).min(9).max(9),
    password: Joi.string().pattern(new RegExp("^(?=.*[A-Z])(?=.*[a-z])(?=.*[\\d])(?=.*[!@#$%^\\-&_*])([A-Za-z\\d!@#$%^\\-&_*]{8,255})$")).min(8).max(255)
});

const validateLoginUsersSchema = Joi.object({
    email: Joi.string().required().email().pattern(new RegExp("^([A-Za-z0-9-._])+@([A-Za-z0-9-._])+\.([A-Za-z]{2,5})|(co\.il)|(com)$")).lowercase().min(5).max(255),
    password: Joi.string().required().pattern(new RegExp("^(?=.*[A-Z])(?=.*[a-z])(?=.*[\\d])(?=.*[!@#$%^\\-&_*])([A-Za-z\\d!@#$%^\\-&_*]{8,255})$")).min(8).max(255),
});

const validateForgotPasswordSchema = Joi.object({
    email: Joi.string().required().email().pattern(new RegExp("^([A-Za-z0-9-._])+@([A-Za-z0-9-._])+\.([A-Za-z]{2,5})|(co\.il)|(com)$")).lowercase().min(5).max(255),
});

module.exports = {
    validateUsersSchema,
    validateUpdateUsersSchema,
    validateLoginUsersSchema,
    validateForgotPasswordSchema
};


// password regex for not a word:       (?=.*[\W])