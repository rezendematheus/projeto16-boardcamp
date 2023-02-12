import Joi from "joi";

const idSchema = Joi.object({
    id: Joi.number().integer().min(1)
})

export default idSchema