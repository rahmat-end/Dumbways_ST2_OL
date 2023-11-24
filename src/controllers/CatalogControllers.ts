import { Request, Response } from "express"
import CatalogServices from "../services/CatalogServices"

export default new class CatalogControllers {
  find(req: Request, res: Response) {
    CatalogServices.find(req, res)
  }
  add(req: Request, res: Response) {
    CatalogServices.add(req, res)
  }
}