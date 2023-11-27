import * as express from "express"
import { Request, Response, NextFunction } from "express"
import AuthenticationMiddlewares from '../middlewares/Auth'
// import FileUpload from "../middlewares/UploadFile"
import ArticleControllers from "../controllers/ArticleControllers"
import PartaiControllers from "../controllers/PartaiControllers"
import PaslonControllers from "../controllers/PaslonControllers"
import CatalogControllers from "../controllers/CatalogControllers"
import VoterControllers from "../controllers/VoterControllers"
import UserControllers from "../controllers/UserControllers"

const router = express.Router()
// const uploadMiddleware = new FileUpload("image")

function requireRole () {
    return function (req: Request, res: Response, next: NextFunction) {
        if (res.locals.loginSession.obj.role == 'admin') {
            next()
        } else {
            return res.status(401).json({ Error: "Unauthorized" })
        }
    }
}

router.get("/article", ArticleControllers.find)
router.get("/article/:id", ArticleControllers.findOne)
// router.post("/addArticle", uploadMiddleware.handleUpload.bind(uploadMiddleware), ArticleControllers.add)
router.post("/addArticle", AuthenticationMiddlewares.Authentication, requireRole(), ArticleControllers.add)
router.put("/updateArticle/:id", AuthenticationMiddlewares.Authentication, requireRole(), ArticleControllers.update)
router.delete("/deleteArticle/:id", AuthenticationMiddlewares.Authentication, requireRole(), ArticleControllers.delete)

router.get("/partai", PartaiControllers.find)
router.get("/partai/:id", PartaiControllers.findOne)
router.post("/addPartai", AuthenticationMiddlewares.Authentication, requireRole(), PartaiControllers.add)
router.put("/updatePartai/:id", AuthenticationMiddlewares.Authentication, requireRole(), PartaiControllers.update)
router.delete("/deletePartai/:id", AuthenticationMiddlewares.Authentication, requireRole(), PartaiControllers.delete)

router.get("/paslon", PaslonControllers.find)
router.get("/paslon/:id", PaslonControllers.findOne)
router.get("/listPaslon", AuthenticationMiddlewares.Authentication, PaslonControllers.listPaslon)
router.get("/infoPaslon/:nama", AuthenticationMiddlewares.Authentication, PaslonControllers.infoPaslon)
router.post("/addPaslon", AuthenticationMiddlewares.Authentication, requireRole(), PaslonControllers.add)
router.put("/updatePaslon/:id", AuthenticationMiddlewares.Authentication, requireRole(), PaslonControllers.update)
router.delete("/deletePaslon/:id", AuthenticationMiddlewares.Authentication, requireRole(), PaslonControllers.delete)

router.get("/voter", VoterControllers.find)
router.get("/voter/:id", VoterControllers.findOne)
router.get("/listVoter", AuthenticationMiddlewares.Authentication, VoterControllers.listVoter)
router.get("/dashboard", AuthenticationMiddlewares.Authentication, VoterControllers.dashboard)
router.post("/addVoter", AuthenticationMiddlewares.Authentication, VoterControllers.add)
router.put("/updateVoter/:id", AuthenticationMiddlewares.Authentication, VoterControllers.update)
router.delete("/deleteVoter/:id", AuthenticationMiddlewares.Authentication, VoterControllers.delete)

router.get("/users", UserControllers.find)
router.get("/user", AuthenticationMiddlewares.Authentication, UserControllers.findOne)
router.post("/auth/register", UserControllers.register)
router.post("/auth/login", UserControllers.login)
router.put("/updateUser", AuthenticationMiddlewares.Authentication, UserControllers.update)
router.delete("/deleteUser", AuthenticationMiddlewares.Authentication, UserControllers.delete)

router.get("/auth/check", AuthenticationMiddlewares.Authentication, UserControllers.check)
router.get("/catalog", CatalogControllers.find)
router.post("/addCatalog", CatalogControllers.add)

export default router