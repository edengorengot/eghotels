const Joi = require('joi');

const validateCreateHotelsSchema = Joi.object({
    hotelId: Joi.string().required().alphanum().min(4).max(8),
    hotelName: Joi.string().required().min(1).max(255),
});





module.exports = {
    validateCreateHotelsSchema,
    // passwordVerification,
    // validateLoginUsersSchema,
    // validateUpdateUsersSchema,
    // validateResetPasswordSchema
};