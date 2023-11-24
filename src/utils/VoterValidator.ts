import * as Joi from "joi"

export const voterSchema = Joi.object({
  nama: Joi.string().required(),
  alamat: Joi.string().required(),
  jenisKelamin: Joi.string().required(),
  paslonId: Joi.number().required()
})