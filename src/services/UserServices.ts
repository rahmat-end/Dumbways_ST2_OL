import { Repository } from "typeorm"
import { User } from "../entities/User"
import { AppDataSource } from "../data-source"
import { Request, Response } from "express"
import { userSchema, loginSchema } from "../utils/UserValidator"
import * as bcrypt from "bcrypt"
import * as jwt from "jsonwebtoken"

export default new class UserServices {
  private readonly UserRepository: Repository<User> = AppDataSource.getRepository(User)
  async find(req: Request, res: Response): Promise<Response> {
    try {
      const user = await this.UserRepository.find()
      return res.status(200).json({
        status: "success",
        data: user,
        message: "Successfully! All record has been fetched"
      })
    } catch (err) {
      return res.status(500).json({ message: "Something error while finding all user"})
    }
  }

  async findOne(req: Request, res: Response): Promise<Response> {
    try {
      const loginSession = res.locals.loginSession
      const user = await this.UserRepository.findOne({
        where: {
            id: loginSession.user.id
        }
      })
      return res.status(200).json({
        status: "success",
        data: user,
        message: "Successfully! Record has been fetched"
      })
    } catch (err) {
      return res.status(500).json({ message: "Something error while finding a spcific data user"})
    }
  }

  async register(req: Request, res: Response): Promise<Response> {
    try {
      const body = req.body

      const { error, value } = userSchema.validate(body)
      if(error) return res.status(409).json({ message: error.message })

      const isUsernameUsed = await this.UserRepository.count({ where: { username: value.username }})
      if(isUsernameUsed > 0) return res.status(409).json({ message: "Username already in use !" })

      const hashPassword = await bcrypt.hash(value.password, 10)

      const isPasswordUsed = await this.UserRepository.count({ where: { password: hashPassword }})
      if(isPasswordUsed > 0) return res.status(409).json({ message: "Password already in use !" })

      const obj = this.UserRepository.create({
        fullName: value.fullName,
        alamat: value.alamat,
        jenisKelamin: value.jenisKelamin,
        username: value.username,
        password: hashPassword
      })

      const user = await this.UserRepository.save(obj)
      return res.status(200).json({
        status: "success",
        data: user,
        message: "Successfully! Record has been added"
      })
    } catch (err) {
      return res.status(500).json({ message: "Something error while inserting data user"})
    }
  }

  async login(req: Request, res: Response): Promise<Response> {
    try {
      const body = req.body

      const { error, value } = loginSchema.validate(body)
      if(error) return res.status(400).json({ message: error.message })

      const isUsernameRegistered = await this.UserRepository.findOne({ where: { username: value.username }})
      if(!isUsernameRegistered) return res.status(409).json({ message: "Username is not registered !" })

      const isMatchPassword = await bcrypt.compare(value.password, isUsernameRegistered.password)
      if(!isMatchPassword) return res.status(409).json({ message: "Incorrect password !" })

      const obj = this.UserRepository.create({
        id: isUsernameRegistered.id,
        fullName: isUsernameRegistered.fullName
      })
      const token = jwt.sign({ obj }, 'SECRET_KEY', { expiresIn: 3600 })
      return res.status(200).json({
        status: "success",
        session: obj,
        token: token,
        message: "Successfully! Token has been assigned & Login session has been created"
      })
    } catch (err) {
      return res.status(500).json({ message: "Something error while login"})
    }
  }

  async check(req: Request, res: Response) : Promise<Response> {
    try {
      const loginSession = res.locals.loginSession
      const user = await this.UserRepository.findOne({
        where: {
          id: loginSession.user.id
        }
      })

      return res.status(200).json({
        status: "success",
        data: user,
        message: "Token is valid!"
      })
    } catch (err) {
      return res.status(500).json({ message: "Something went wrong on the server!"})
    //   throw new Error("Something went wrong on the server!")
    }
  }

  async update(req: Request, res: Response): Promise<Response> {
    try {
      const body = req.body

      const { error, value } = userSchema.validate(body)
      if(error) return res.status(400).json({ message: error.message })

      const isUsernameUsed = await this.UserRepository.count({ where: { username: value.username }})
      if(isUsernameUsed > 0) return res.status(409).json({ message: "Username already in use !" })

      const hashPassword = await bcrypt.hash(value.password, 10)

      const isPasswordUsed = await this.UserRepository.count({ where: { password: hashPassword }})
      if(isPasswordUsed > 0) return res.status(409).json({ message: "Password already in use !" })

      const obj = this.UserRepository.create({
        fullName: value.fullName,
        alamat: value.alamat,
        jenisKelamin: value.jenisKelamin,
        username: value.username,
        password: hashPassword
      })

      const loginSession = res.locals.loginSession
      await this.UserRepository.update(loginSession.user.id, obj)
      const user = await this.UserRepository.findOne({
        where: {
          id: loginSession.user.id
        }
      })
      return res.status(200).json({
        status: "success",
        data: user,
        message: "Successfully! Record has been updated"
      })
    } catch (err) {
      return res.status(500).json({ message: "Something error while updating data user"})
    }
  }

  async delete(req: Request, res: Response): Promise<Response> {
    try {
      const loginSession = res.locals.loginSession
      const user = await this.UserRepository.delete(loginSession.user.id)
      return res.status(200).json({
        status: "success",
        data: user,
        message: "Successfully! Record has been deleted"
      })
    } catch (err) {
      return res.status(500).json({ message: "Something error while deleting data user"})
    }
  }

}