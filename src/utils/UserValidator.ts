import * as Joi from "joi"

export const userSchema = Joi.object({
  fullName: Joi.string().required(),
  alamat: Joi.string().required(),
  jenisKelamin: Joi.string().required(),
  username: Joi.string().required(),
  password: Joi.string().required(),
  role: Joi.string().required()
})

export const loginSchema = Joi.object({
  username: Joi.string().required(),
  password: Joi.string().required()
})