import Joi from "joi";

const userValidator = Joi.object({
    name: Joi.string().regex(/^[a-zA-Zа-яА-яёЁіІїЇ]{1,20}$/).required().messages({
        'string.pattern,base': 'Name must use only letters, minimum 1 symbol, maximum 20'
    }),
    username: Joi.string().required()
})

export {userValidator}