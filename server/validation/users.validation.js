const Joi = require('joi');

const validateUsersSchema = Joi.object({
    firstName: Joi.string().required().alphanum().min(2).max(255),
    lastName: Joi.string().required().alphanum().min(2).max(255),
    email: Joi.string().required().email().pattern(new RegExp("^([A-Za-z0-9-._])+@([A-Za-z0-9-._])+\.([A-Za-z]{2,5})|(co\.il)|(com)$")).lowercase().min(5).max(255),
    mobilePhone: Joi.string().required().pattern(new RegExp("^(05+[012345689]{1})+(\\d{7})$")).min(10).max(10),
    telephone: Joi.string().pattern(new RegExp("^(0+[23489]{1})+(\\d{7})$")).min(9).max(9),
    password: Joi.string().required().pattern(new RegExp("^(?=.*[A-Z])(?=.*[a-z])(?=.*[\\d])(?=.*[!@#$%^\\-&_*])([A-Za-z\\d!@#$%^\\-&_*]{8,255})$")).min(8).max(255),
    profileImg: Joi.string().min(5).max(255),
});

module.exports = {
    validateUsersSchema,
};