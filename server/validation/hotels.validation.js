const Joi = require('joi');

const validateNewHotelsSchema = Joi.object({
    hotelId: Joi.string().required().alphanum().min(4).max(8),
    hotelName: Joi.string().required().min(1).max(255),
});

const validateSearchHotelsSchema = Joi.object({
    hotelName: Joi.string().required().min(1).max(255),
});




module.exports = {
    validateNewHotelsSchema,
    validateSearchHotelsSchema,
    // passwordVerification,
    // validateLoginUsersSchema,
    // validateUpdateUsersSchema,
    // validateResetPasswordSchema
};