import { Repository } from "typeorm"
import { Partai } from "../entities/Partai"
import { AppDataSource } from "../data-source"
import { Request, Response } from "express"
import { partaiSchema } from "../utils/PartaiValidator"

export default new class PartaiServices {
  private readonly PartaiRepository: Repository<Partai> = AppDataSource.getRepository(Partai)
  async find(req: Request, res: Response): Promise<Response> {
    try {
      const partai = await this.PartaiRepository.find()
      return res.status(200).json({
        status: "success",
        data: partai,
        message: "Successfully! All record has been fetched"
      })
    } catch (err) {
      return res.status(500).json({ message: "Something error while finding all partai"})
    }
  }

  async findOne(req: Request, res: Response): Promise<Response> {
    try {
      const partai = await this.PartaiRepository.find({
        where: {
          id: JSON.parse(req.params.id)
        }
      })
      return res.status(200).json({
        status: "success",
        data: partai,
        message: "Successfully! Record has been fetched"
      })
    } catch (err) {
      return res.status(500).json({ message: "Something error while finding a spcific data partai"})
    }
  }

  async add(req: Request, res: Response): Promise<Response> {
    try {
      const body = req.body

      const { error, value } = partaiSchema.validate(body)
      if(error) return res.status(400).json({ message: error.message })

      const obj = this.PartaiRepository.create({
        nama: value.nama,
        ketuaUmum: value.ketuaUmum,
        visiMisi: value.visiMisi,
        alamat: value.alamat
      })

      const partai = await this.PartaiRepository.save(obj)
      return res.status(200).json({
        status: "success",
        data: partai,
        message: "Successfully! Record has been added"
      })
      // if (!schema.validate(req.body).error) {
      //   const partai = await this.PartaiRepository
      //     .createQueryBuilder('partai')
      //     .insert()
      //     .values([
      //       { nama: req.body.nama, ketuaUmum: req.body.ketuaUmum, visiMisi: req.body.visiMisi, alamat: req.body.alamat }
      //     ])
      //     .execute()
      //   return res.status(200).json({
      //     status: "success",
      //     data: partai,
      //     message: "Successfully! Record has been added"
      //   })
      // } else {
      //   return res.status(400).json({ message: `${schema.validate(req.body).error.details.map(ed => ed.message)}` })
      // }
    } catch (err) {
      return res.status(500).json({ message: "Something error while inserting data partai"})
    }
  }

  async update(req: Request, res: Response): Promise<Response> {
    try {
      const body = req.body

      const { error, value } = partaiSchema.validate(body)
      if(error) return res.status(400).json({ message: error.message })

      const obj = this.PartaiRepository.create({
        nama: value.nama,
        ketuaUmum: value.ketuaUmum,
        visiMisi: value.visiMisi,
        alamat: value.alamat
      })

      await this.PartaiRepository.update(req.params.id, obj)
      const partai = await this.PartaiRepository.find({
        where: {
          id: JSON.parse(req.params.id)
        }
      })
      return res.status(200).json({
        status: "success",
        data: partai,
        message: "Successfully! Record has been updated"
      })
      // if (!schema.validate(req.body).error) {
      //   const partai = await this.PartaiRepository
      //     .createQueryBuilder('partai')
      //     .update()
      //     .set({ nama: req.body.nama, ketuaUmum: req.body.ketuaUmum, visiMisi: req.body.visiMisi, alamat: req.body.alamat, updatedAt: new Date })
      //     .where("id = :id", { id: req.params.id })
      //     .execute()
      //   const partaiMessage = await this.PartaiRepository
      //     .createQueryBuilder("partai")
      //     .where("partai.id = :id", { id: req.params.id })
      //     .getOne()
      //   return res.status(200).json({
      //     status: "success",
      //     data: partaiMessage,
      //     message: "Successfully! Record has been updated"
      //   })
      // } else {
      //   return res.status(400).json({ message: `${schema.validate(req.body).error.details.map(ed => ed.message)}` })
      // }
    } catch (err) {
      return res.status(500).json({ message: "Something error while updating data partai"})
    }
  }

  async delete(req: Request, res: Response): Promise<Response> {
    try {
      const partai = await this.PartaiRepository.delete(req.params.id)
      return res.status(200).json({
        status: "success",
        data: partai,
        message: "Successfully! Record has been deleted"
      })
    } catch (err) {
      return res.status(500).json({ message: "Something error while deleting data partai"})
    }
  }

}