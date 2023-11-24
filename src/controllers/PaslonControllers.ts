import { Request, Response } from "express"
import PaslonServices from "../services/PaslonServices"

export default new class PaslonControllers {
  find(req: Request, res: Response) {
    PaslonServices.find(req, res)
  }
  findOne(req: Request, res: Response) {
    PaslonServices.findOne(req, res)
  }
  add(req: Request, res: Response) {
    PaslonServices.add(req, res)
  }
  update(req: Request, res: Response) {
    PaslonServices.update(req, res)
  }
  delete(req: Request, res: Response) {
    PaslonServices.delete(req, res)
  }
}