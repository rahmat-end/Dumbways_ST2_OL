import { Router } from "express"
import ProductControllers from "../controllers/ProductControllers"

const router = Router()

router.get("/products", ProductControllers.find)
router.get("/products/:id", ProductControllers.findOne)
router.post("/add", ProductControllers.add)
router.put("/update/:id", ProductControllers.update)
router.delete("/delete/:id", ProductControllers.delete)

export default router