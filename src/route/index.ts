import * as express from "express"
import AuthenticationMiddlewares from '../middlewares/Auth'
import FileUpload from "../middlewares/UploadFile"
import ArticleControllers from "../controllers/ArticleControllers"
import PartaiControllers from "../controllers/PartaiControllers"
import PaslonControllers from "../controllers/PaslonControllers"
import CatalogControllers from "../controllers/CatalogControllers"
import VoterControllers from "../controllers/VoterControllers"
import UserControllers from "../controllers/UserControllers"

const router = express.Router()
const uploadMiddleware = new FileUpload("image")

router.get("/article", ArticleControllers.find)
router.get("/article/:id", ArticleControllers.findOne)
router.post("/addArticle", uploadMiddleware.handleUpload.bind(uploadMiddleware), ArticleControllers.add)
router.put("/updateArticle/:id", ArticleControllers.update)
router.delete("/deleteArticle/:id", ArticleControllers.delete)

router.get("/partai", PartaiControllers.find)
router.get("/partai/:id", PartaiControllers.findOne)
router.post("/addPartai", PartaiControllers.add)
router.put("/updatePartai/:id", PartaiControllers.update)
router.delete("/deletePartai/:id", PartaiControllers.delete)

router.get("/paslon", PaslonControllers.find)
router.get("/paslon/:id", PaslonControllers.findOne)
router.post("/addPaslon", PaslonControllers.add)
router.put("/updatePaslon/:id", PaslonControllers.update)
router.delete("/deletePaslon/:id", PaslonControllers.delete)

router.get("/voter", VoterControllers.find)
router.get("/voter/:id", VoterControllers.findOne)
router.post("/addVoter", VoterControllers.add)
router.put("/updateVoter/:id", VoterControllers.update)
router.delete("/deleteVoter/:id", VoterControllers.delete)

router.get("/user", UserControllers.find)
router.get("/user/:id", UserControllers.findOne)
router.post("/auth/register", UserControllers.register)
router.post("/auth/login", UserControllers.login)
router.get("/auth/check", AuthenticationMiddlewares.Authentication, UserControllers.check)
router.put("/updateUser/:id", UserControllers.update)
router.delete("/deleteUser/:id", UserControllers.delete)

router.get("/catalog", CatalogControllers.find)
router.post("/addCatalog", CatalogControllers.add)

export default router