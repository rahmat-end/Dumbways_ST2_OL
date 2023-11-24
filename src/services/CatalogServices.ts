import { Repository } from "typeorm"
import { Catalog } from "../entities/Catalog"
import { AppDataSource } from "../data-source"
import { Request, Response } from "express"
import cloudinary from "../middlewares/cloudinary"

export default new class CatalogServices {
  private readonly CatalogRepository: Repository<Catalog> = AppDataSource.getRepository(Catalog)
  async find(req: Request, res: Response): Promise<void> {
    try {
      const obj = await this.CatalogRepository
        .createQueryBuilder("catalog")
        .getMany()
        const data = obj.map((res) => ({ ...res }))
        res.render('catalog', {
            catalogs: data
        })
    } catch (err) {
      console.log(err)
    }
  }

  async add (req: Request, res: Response): Promise<Response> {
    try {
        const file = req.files
        if(!req.files) {
            res.status(500).json({ message: "No file was uploaded" })
        }
        const dataFile = JSON.parse(JSON.stringify(file))
        const filePath = dataFile["image"].tempFilePath
        cloudinary.uploader.upload(
            filePath,
            async(errorCloudinary: any, result: any) => {
                if(errorCloudinary) {
                    return res.status(400).json({ message: errorCloudinary.message })
                }
                const catalog = await this.CatalogRepository
                  .createQueryBuilder('catalog')
                  .insert()
                  .values([
                    { title: req.body.title, imageURL: result.secure_url, public_id: result.secure_url }
                  ])
                  .execute()
                  return res.status(200).json({
                    status: "success",
                    data: catalog,
                    message: "Successfully! Record has been added"
                  })
                
            }
        )
    } catch (err) {
        return res.status(500).json({ message: "Something error while inserting data catalog"})
    }
  }

}