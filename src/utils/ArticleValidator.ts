import * as Joi from "joi"

export const articleSchema = Joi.object({
  title: Joi.string().required(),
  image: Joi.string().required(),
  description: Joi.string().required()
})
export const articleUpdateSchema = Joi.object({
  title: Joi.string().required(),
  description: Joi.string().required()
})