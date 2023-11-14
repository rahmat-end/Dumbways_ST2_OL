import express from "express"
import router from "./src/routes"
import BodyParser from "body-parser"

async function Start() : Promise<void> {
  try {
    const app = express()
    const PORT = 5000

    app.use(express.json()) 
    app.use(BodyParser.urlencoded({ extended: false }))
    app.use(BodyParser.json())
    app.use("/api/v1", router)

    app.listen(PORT, () => console.log("Server running"))
  } catch (error) {
    console.log(error);
    process.exit(1)
  }
}

void Start()