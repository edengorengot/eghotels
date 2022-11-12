import Joi from 'joi-browser';

const hotelValidation = {
    createSchema: {
        hotelId: Joi.string().alphanum().min(4).max(8).required(),
        hotelName: Joi.string().min(1).max(255).required(),
    },
    searchSchema: {
        hotelName: Joi.string().min(1).max(255).required(),
    },
    updateSchema: {
        hotelName: Joi.string().min(1).max(255).required(),
        newHotelName: Joi.string().min(1).max(255).required(),
    },
};

export default hotelValidation;