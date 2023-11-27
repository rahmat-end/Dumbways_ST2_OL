import * as Joi from "joi"

export const voterSchema = Joi.object({
  paslonId: Joi.number().required()
})