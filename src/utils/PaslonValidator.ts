import * as Joi from "joi"

export const paslonSchema = Joi.object({
  nama: Joi.string().required(),
  noUrut: Joi.number().required(),
  visiMisi: Joi.string().required(),
  partaiId: Joi.number().required()
})