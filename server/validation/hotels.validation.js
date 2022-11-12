const Joi = require('joi');

const validateNewHotelsSchema = Joi.object({
    hotelId: Joi.string().required().alphanum().min(4).max(8),
    hotelName: Joi.string().required().min(1).max(255),
});

const validateSearchHotelsSchema = Joi.object({
    hotelName: Joi.string().required().min(1).max(255),
});

const validateUpdateHotelsSchema = Joi.object({
    hotelName: Joi.string().optional().min(1).max(255),
    newHotelName: Joi.string().optional().min(1).max(255),
    year: Joi.number().optional().min(2000).max(3000),
});



module.exports = {
    validateNewHotelsSchema,
    validateSearchHotelsSchema,
    validateUpdateHotelsSchema,
};