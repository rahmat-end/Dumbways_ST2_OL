import "reflect-metadata"
import { DataSource } from "typeorm"
import * as dotenv from "dotenv"
import { PemiluDumbways1701061896256 } from "./migrations/1701061896256-Pemilu_Dumbways"
// import { User } from "./entity/User"

dotenv.config()

export const AppDataSource = new DataSource({
    type: "postgres",
    host: process.env.DB_HOST,
    port: JSON.parse(process.env.DB_PORT),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    synchronize: true,
    logging: false,
    entities: ['src/entities/*.ts'],
    migrations: [PemiluDumbways1701061896256],
    subscribers: [],
})
