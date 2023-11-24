import { Repository } from "typeorm"
import { Article } from "../entities/Article"
import { AppDataSource } from "../data-source"
import { Request, Response } from "express"
import { articleSchema } from "../utils/ArticleValidator"
import cloudinary from "../libs/cloudinary"

export default new class ArticleServices {
  private readonly ArticleRepository: Repository<Article> = AppDataSource.getRepository(Article)
  async find(req: Request, res: Response): Promise<Response> {
    try {
      const article = await this.ArticleRepository.find()
      return res.status(200).json({
        status: "success",
        data: article,
        message: "Successfully! All record has been fetched"
      })
    } catch (err) {
      return res.status(500).json({ message: "Something error while finding all article"})
    }
  }

  async findOne(req: Request, res: Response): Promise<Response> {
    try {
      const article = await this.ArticleRepository.find({
        where: {
          id: JSON.parse(req.params.id)
        }
      })
      return res.status(200).json({
        status: "success",
        data: article,
        message: "Successfully! Record has been fetched"
      })
    } catch (err) {
      return res.status(500).json({ message: "Something error while finding a spcific data article"})
    }
  }

  async add(req: Request, res: Response): Promise<Response> {
    try {
      const body = req.body

      const { error, value } = articleSchema.validate(body)
      if(error) return res.status(400).json({ message: error.message })

      // const cloudinaryResponse = await cloudinary.destination(value.image)
      const obj = this.ArticleRepository.create({
        title: value.title,
        image: value.image,
        description: value.description
      })

      const article = await this.ArticleRepository.save(obj)
      return res.status(200).json({
        status: "success",
        data: article,
        message: "Successfully! Record has been added"
      })
    } catch (err) {
      return res.status(500).json({ message: "Something error while inserting data article"})
    }
  }

  async update(req: Request, res: Response): Promise<Response> {
    try {
      const body = req.body

      const { error, value } = articleSchema.validate(body)
      if(error) return res.status(400).json({ message: error.message })

      // const cloudinaryResponse = await cloudinary.destination(value.image)
      const obj = this.ArticleRepository.create({
        title: value.title,
        image: value.image,
        description: value.description
      })

      await this.ArticleRepository.update(req.params.id, obj)
      const article = await this.ArticleRepository.find({
        where: {
          id: JSON.parse(req.params.id)
        }
      })
      return res.status(200).json({
        status: "success",
        data: article,
        message: "Successfully! Record has been updated"
      })
    } catch (err) {
      return res.status(500).json({ message: "Something error while updating data article"})
    }
  }

  async delete(req: Request, res: Response): Promise<Response> {
    try {
      const article = await this.ArticleRepository.delete(req.params.id)
      return res.status(200).json({
        status: "success",
        data: article,
        message: "Successfully! Record has been deleted"
      })
    } catch (err) {
      return res.status(500).json({ message: "Something error while deleting data article"})
    }
  }

}