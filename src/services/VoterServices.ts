import { Repository } from "typeorm"
import { Voter } from "../entities/Voter"
import { AppDataSource } from "../data-source"
import { Request, Response } from "express"
import { voterSchema } from "../utils/VoterValidator"
import { request } from "https"

export default new class VoterServices {
  private readonly VoterRepository: Repository<Voter> = AppDataSource.getRepository(Voter)
  async find(req: Request, res: Response): Promise<Response> {
    try {
      const voter = await this.VoterRepository.find({
        order: { 
          id: "ASC" 
        },
        relations: {
          user: true,
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
          user: true,
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

  async listVoter(req: Request, res: Response): Promise<Response> {
    try {
      const voter = await this.VoterRepository.find({
        select: {
          id: true,
          user: {
            fullName: true,
            alamat: true,
            jenisKelamin: true
          },
          paslon: {
            nama: true
          }
        },
        order: { 
          id: "ASC" 
        },
        relations: {
          user: true,
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

  async dashboard(req: Request, res: Response): Promise<Response> {
    try {
      const getVoter = await this.VoterRepository.find({
        select: {
          id: true,
          paslon: {
            nama: true,
            noUrut: true
          }
        },
        order: { 
          id: "ASC" 
        },
        relations: {
          paslon: true
        }
      })
      const rawData = await this.VoterRepository.manager
      .query(`select "nama", "noUrut", COUNT(*) AS Akumulasi from "voter" left join "paslon" on "paslonId" = paslon.id GROUP BY "nama", "noUrut"`)

      let dataDashboard: any[] = []
      for (let i = 0; i < getVoter.length; i++) {
        if (dataDashboard.length <= getVoter.length) {
          let obj = {
            paslon: rawData[i].nama,
            akumulasi: rawData[i].akumulasi * 100 / getVoter.length + " %",
            jumlahVote: getVoter.length + " Voters"
          }
          dataDashboard[i].push(obj)
        }
      }
      
      if(dataDashboard) return res.status(409).json({ message: dataDashboard })

      return res.status(200).json({
        status: "success",
        data: dataDashboard,
        message: "Successfully! All record has been fetched"
      })
    } catch (err) {
      return res.status(500).json({ message: "Something error while finding dashboard"})
    }
  }

  async add(req: Request, res: Response): Promise<Response> {
    try {
      const body = req.body
      const loginSession = res.locals.loginSession

      const { error, value } = voterSchema.validate(body)
      if(error) return res.status(400).json({ message: error.message })

      const obj = this.VoterRepository.create({
        user: loginSession.obj.id,
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
      const loginSession = res.locals.loginSession

      const { error, value } = voterSchema.validate(body)
      if(error) return res.status(400).json({ message: error.message })

      const obj = this.VoterRepository.create({
        user: loginSession.obj.id,
        paslon: value.paslonId,
        updatedAt: new Date
      })

      await this.VoterRepository.update(req.params.id, obj)
      const voter = await this.VoterRepository.find({
        where: {
          id: JSON.parse(req.params.id)
        },
        relations: {
          user: true,
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