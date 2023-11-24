import { Repository } from "typeorm"
import { Voter } from "../entities/Voter"
import { AppDataSource } from "../data-source"
import { Request, Response } from "express"
import { voterSchema } from "../utils/VoterValidator"

export default new class VoterServices {
  private readonly VoterRepository: Repository<Voter> = AppDataSource.getRepository(Voter)
  async find(req: Request, res: Response): Promise<Response> {
    try {
      const voter = await this.VoterRepository.find({
        relations: {
            paslon: true
        }
      })
      return res.status(200).json({
        status: "success",
        data: voter,
        message: "Successfully! All record has been fetched"
      })
    } catch (err) {
      return res.status(500).json({ message: "Something error while finding all voter"})
    }
  }

  async findOne(req: Request, res: Response): Promise<Response> {
    try {
      const voter = await this.VoterRepository.find({
        where: {
          id: JSON.parse(req.params.id)
        },
        relations: {
            paslon: true
        }
      })
      return res.status(200).json({
        status: "success",
        data: voter,
        message: "Successfully! Record has been fetched"
      })
    } catch (err) {
      return res.status(500).json({ message: "Something error while finding a spcific data voter"})
    }
  }

  async add(req: Request, res: Response): Promise<Response> {
    try {
      const body = req.body

      const { error, value } = voterSchema.validate(body)
      if(error) return res.status(400).json({ message: error.message })

      const obj = this.VoterRepository.create({
        nama: value.nama,
        alamat: value.alamat,
        jenisKelamin: value.jenisKelamin,
        paslon: value.paslonId
      })

      const voter = await this.VoterRepository.save(obj)
      return res.status(200).json({
        status: "success",
        data: voter,
        message: "Successfully! Record has been added"
      })
    } catch (err) {
      return res.status(500).json({ message: "Something error while inserting data voter"})
    }
  }

  async update(req: Request, res: Response): Promise<Response> {
    try {
      const body = req.body

      const { error, value } = voterSchema.validate(body)
      if(error) return res.status(400).json({ message: error.message })

      const obj = this.VoterRepository.create({
        nama: value.nama,
        alamat: value.alamat,
        jenisKelamin: value.jenisKelamin,
        paslon: value.paslonId
      })

      await this.VoterRepository.update(req.params.id, obj)
      const voter = await this.VoterRepository.find({
        where: {
          id: JSON.parse(req.params.id)
        },
        relations: {
            paslon: true
        }
      })
      return res.status(200).json({
        status: "success",
        data: voter,
        message: "Successfully! Record has been updated"
      })
    } catch (err) {
      return res.status(500).json({ message: "Something error while updating data voter"})
    }
  }

  async delete(req: Request, res: Response): Promise<Response> {
    try {
      const voter = await this.VoterRepository.delete(req.params.id)
      return res.status(200).json({
        status: "success",
        data: voter,
        message: "Successfully! Record has been deleted"
      })
    } catch (err) {
      return res.status(500).json({ message: "Something error while deleting data voter"})
    }
  }

}