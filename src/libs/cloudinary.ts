import { v2 as cloudinary } from "cloudinary"
import * as dotenv from "dotenv"

dotenv.config()

export default new class CloudinaryConfig {
  upload() {
    cloudinary.config({
      cloud_name: process.env.CLOUD_NAME,
      api_key: process.env.API_KEY,
      api_secret: process.env.API_SECRET,
      secure: true
    })
  }

  async destination(image: any) {
    try {
      const cloudinaryResponse = await cloudinary.uploader.upload('src/uploads/' + image)
      return cloudinaryResponse.secure_url
    } catch (err) {
      throw err
    }
  }
}