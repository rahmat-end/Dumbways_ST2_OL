import * as Joi from "joi"

export const partaiSchema = Joi.object({
  nama: Joi.string().required(),
  ketuaUmum: Joi.string().required(),
  visiMisi: Joi.string().required(),
  alamat: Joi.string().required()
})