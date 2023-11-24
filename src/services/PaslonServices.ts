import { Repository } from "typeorm"
import { Paslon } from "../entities/Paslon"
import { AppDataSource } from "../data-source"
import { Request, Response } from "express"
import { paslonSchema } from "../utils/PaslonValidator"

export default new class PaslonServices {
  private readonly PaslonRepository: Repository<Paslon> = AppDataSource.getRepository(Paslon)
  async find(req: Request, res: Response): Promise<Response> {
    try {
      const paslon = await this.PaslonRepository.find()
      return res.status(200).json({
        status: "success",
        data: paslon,
        message: "Successfully! All record has been fetched"
      })
    } catch (err) {
      return res.status(500).json({ message: "Something error while finding all paslon"})
    }
  }

  async findOne(req: Request, res: Response): Promise<Response> {
    try {
      const paslon = await this.PaslonRepository.find({
        where: {
          id: JSON.parse(req.params.id)
        }
      })
      return res.status(200).json({
        status: "success",
        data: paslon,
        message: "Successfully! Record has been fetched"
      })
    } catch (err) {
      return res.status(500).json({ message: "Something error while finding a spcific data paslon"})
    }
  }

  async add(req: Request, res: Response): Promise<Response> {
    try {
      const body = req.body

      const { error, value } = paslonSchema.validate(body)
      if(error) return res.status(400).json({ message: error.message })

      const obj = this.PaslonRepository.create({
        nama: value.nama,
        noUrut: value.noUrut,
        visiMisi: value.visiMisi
      })

      const partai = await this.PaslonRepository.save(obj)
      return res.status(200).json({
        status: "success",
        data: partai,
        message: "Successfully! Record has been added"
      })
    } catch (err) {
      return res.status(500).json({ message: "Something error while inserting data paslon"})
    }
  }

  async update(req: Request, res: Response): Promise<Response> {
    try {
      const body = req.body

      const { error, value } = paslonSchema.validate(body)
      if(error) return res.status(400).json({ message: error.message })

      const obj = this.PaslonRepository.create({
        nama: value.nama,
        noUrut: value.noUrut,
        visiMisi: value.visiMisi
      })

      await this.PaslonRepository.update(req.params.id, obj)
      const partai = await this.PaslonRepository.find({
        where: {
          id: JSON.parse(req.params.id)
        }
      })
      return res.status(200).json({
        status: "success",
        data: partai,
        message: "Successfully! Record has been updated"
      })
    } catch (err) {
      return res.status(500).json({ message: "Something error while updating data paslon"})
    }
  }

  async delete(req: Request, res: Response): Promise<Response> {
    try {
      const paslon = await this.PaslonRepository.delete(req.params.id)
      return res.status(200).json({
        status: "success",
        data: paslon,
        message: "Successfully! Record has been deleted"
      })
    } catch (err) {
      return res.status(500).json({ message: "Something error while deleting data paslon"})
    }
  }

}