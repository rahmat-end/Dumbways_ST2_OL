import { Sequelize } from "sequelize";
import dotenv from "dotenv"

dotenv.config()

const dbName: string = process.env.DB_NAME as string
const dbHost: string = process.env.DB_HOST as string
const dbUsername: string = process.env.DB_USERNAME as string
const dbPassword: any = process.env.DB_PASSWORD
const dbDialect = "mysql"

export const sequelizeConnection: any = new Sequelize(dbName, dbUsername, dbPassword, {
  host: dbHost,
  dialect: dbDialect
})