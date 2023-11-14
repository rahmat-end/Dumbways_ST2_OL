import { Request, Response } from "express"
import Product from "../databases/models/product"

export default new class ProductService {
  async find(req: Request, res: Response) : Promise<Response> {
    try {
      const products = await Product.findAll()

      return res.status(200).json({
        status: "success",
        data: products,
        message: "Successfully! All record has been fetched"
      })
    } catch (error) {
      return res.status(500).json({ message: "Something error while finding all product"})
    }
  }

  async findOne(req: Request, res: Response) : Promise<Response> {
    try {
      const products = await Product.findAll({
        where: {
          id: req.params.id
        }
      })

      return res.status(200).json({
        status: "success",
        data: products,
        message: "Successfully! Record has been fetched"
      })
    } catch (error) {
      return res.status(500).json({ message: "Something error while finding product"})
    }
  }

  async add(req: Request, res: Response) : Promise<Response> {
    let bodyTitle = req.body.title
    let bodyPrice = req.body.price
    let bodyImage = req.body.image
    try {
      const products = await Product.create({ title: bodyTitle, price: bodyPrice, image: bodyImage })

      return res.status(200).json({
        status: "success",
        data: products,
        message: "Successfully! Record has been added"
      })
    } catch (error) {
      return res.status(500).json({ message: "Something error while inserting data product"})
    }
  }

  async update(req: Request, res: Response) : Promise<Response> {
    let bodyTitle = req.body.title
    let bodyPrice = req.body.price
    let bodyImage = req.body.image
    try {
      const products = await Product.update({ title: bodyTitle, price: bodyPrice, image: bodyImage, updatedAt: new Date }, {
        where: {
          id: req.params.id
        }
      })
      const productsMessage = await Product.findAll({
        where: {
          id: req.params.id
        }
      })

      return res.status(200).json({
        status: "success",
        data: productsMessage,
        message: "Successfully! Record has been updated"
      })
    } catch (error) {
      return res.status(500).json({ message: "Something error while updating data product"})
    }
  }

  async delete(req: Request, res: Response) : Promise<Response> {
    try {
      const products = await Product.destroy({
        where: {
          id: req.params.id
        }
      })

      return res.status(200).json({
        status: "success",
        data: products,
        message: "Successfully! Record has been deleted"
      })
    } catch (error) {
      return res.status(500).json({ message: "Something error while deleting data product"})
    }
  }
}
