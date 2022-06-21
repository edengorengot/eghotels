const Joi = require('joi');

const validateUsersSchema = Joi.object({
    firstName: Joi.string().required().alphanum().min(2).max(255),
    lastName: Joi.string().required().alphanum().min(2).max(255),
    // email: Joi.string().required().email().pattern(new RegExp("/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/")).lowercase().min(5).max(255),
    email: Joi.string().required().email().pattern(new RegExp("^([A-Za-z0-9-._])+@([A-Za-z0-9-._])+\.([A-Za-z]{2,5})$")).lowercase().min(5).max(255),
    // mobilePhone: Joi.string().required().pattern(new RegExp("^05+([012345689]{1})+([-]{0,1})+(\d{7})$")).min(9).max(10),
    mobilePhone: Joi.string().required().pattern(new RegExp("^05+(\\d{1})+([-]{0,1})+(\\d{7})$")).min(9).max(10),
    telephone: Joi.string().pattern(new RegExp("^05([012345689]{1}\d{7})$/")).min(9).max(10),
    password: Joi.string().required().pattern(new RegExp("/^\b[A-Za-z0-9!@#$%^&*\-_*]{8,255}\b$/")).min(8).max(255),
    // repeat_password: Joi.string().pattern(new RegExp("/^\b[A-Za-z0-9!@#$%^&*\-_*]{8,255}\b$/")).min(8).max(255).optional(),
    profileImg: Joi.string().min(5).max(255),
});


// additional email RegExp: \b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}\b





// try {
//     const value = await schema.validateAsync({ username: 'abc', birth_year: 1994 });
// }
// catch (err) { }






module.exports = {
    validateUsersSchema,
};  