import { Request, Response } from "express"
import VoterServices from "../services/VoterServices"

export default new class VoterControllers {
  find(req: Request, res: Response) {
    VoterServices.find(req, res)
  }
  findOne(req: Request, res: Response) {
    VoterServices.findOne(req, res)
  }
  add(req: Request, res: Response) {
    VoterServices.add(req, res)
  }
  update(req: Request, res: Response) {
    VoterServices.update(req, res)
  }
  delete(req: Request, res: Response) {
    VoterServices.delete(req, res)
  }
}