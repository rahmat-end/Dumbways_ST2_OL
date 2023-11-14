import { Request, Response } from "express";
import ProductServices from "../service/ProductServices";

export default new class ProductControllers {
  find(req: Request, res: Response) {
    ProductServices.find(req, res)
  }
  findOne(req: Request, res: Response) {
    ProductServices.findOne(req, res)
  }
  add(req: Request, res: Response) {
    ProductServices.add(req, res)
  }
  update(req: Request, res: Response) {
    ProductServices.update(req, res)
  }
  delete(req: Request, res: Response) {
    ProductServices.delete(req, res)
  }
}