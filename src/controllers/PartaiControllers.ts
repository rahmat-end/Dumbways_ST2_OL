import { Request, Response } from "express"
import PartaiServices from "../services/PartaiServices"

export default new class PartaiControllers {
  find(req: Request, res: Response) {
    PartaiServices.find(req, res)
  }
  findOne(req: Request, res: Response) {
    PartaiServices.findOne(req, res)
  }
  add(req: Request, res: Response) {
    PartaiServices.add(req, res)
  }
  update(req: Request, res: Response) {
    PartaiServices.update(req, res)
  }
  delete(req: Request, res: Response) {
    PartaiServices.delete(req, res)
  }
}