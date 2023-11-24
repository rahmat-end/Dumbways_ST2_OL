import { v2 as cloudinary } from "cloudinary"

export default new class CloudinaryConfig {
  upload() {
    cloudinary.config({
      cloud_name: 'deheo4nfk',
      api_key: '183914859286216',
      api_secret: 'WIjUi4Uyr81gCU97TDBI_dw7i8k',
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