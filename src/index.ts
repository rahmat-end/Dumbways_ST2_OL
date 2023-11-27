import * as express from "express"
import * as cors from "cors"
import { Request, Response } from "express"
import { AppDataSource } from "./data-source"
import router from "./route"
// import cloudinary from "./libs/cloudinary"
import fileUpload = require("express-fileupload")
import * as path from "path"

AppDataSource.initialize().then(async () => {
    const app = express()
    const port = 5000

    //setup CORS
    const corsOption = {
        origin: "http://localhost:5000",
        methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
        preflightContinue: false,
        optionsSuccessStatus: 204
    }
    app.use(cors(corsOption))

    //setup cloudinary
    app.use(fileUpload({ useTempFiles: true, tempFileDir: "/tmp/" }))
    // cloudinary.upload()

    //setup hbs
    app.set('view engine', 'hbs')
    app.set('views', path.join(__dirname, './views'))

    app.use(express.json())
    app.use(express.urlencoded({extended: false}))
    app.use("/api/v1", router)
    app.get("/", (req: Request, res: Response) => {
        res.send("Hello world")
    })
    app.listen(port, () => {
        console.log("Server running on port 5000")
    })
}).catch(error => console.log(error))
