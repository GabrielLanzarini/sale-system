import dotenv from "dotenv"
import { DataSource } from "typeorm"
import "reflect-metadata"
import { Product } from "./model/Product"
import { Adm_account } from "./model/Adm/Adm_account"
import { Request } from "./model/Request"
import { User_account } from "./model/User/User_account"
import { User_info } from "./model/User/User_info"

import { default1678448566391 as migration } from "../src/migrations/1678448566391-default"

dotenv.config()
const port = process.env.DB_DOOR as number | undefined

export const AppDataSource = new DataSource({
    type: "postgres",
    host: process.env.DB_HOST,
    port: port,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_DATA,
    entities: [Adm_account, User_account, User_info, Product, Request],
    migrations: [migration],
})
