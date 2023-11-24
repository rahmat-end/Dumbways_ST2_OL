import { Request, Response } from "express"
import ArticleServices from "../services/ArticleServices"

export default new class ArticleControllers {
  find(req: Request, res: Response) {
    ArticleServices.find(req, res)
  }
  findOne(req: Request, res: Response) {
    ArticleServices.findOne(req, res)
  }
  add(req: Request, res: Response) {
    ArticleServices.add(req, res)
  }
  update(req: Request, res: Response) {
    ArticleServices.update(req, res)
  }
  delete(req: Request, res: Response) {
    ArticleServices.delete(req, res)
  }
}