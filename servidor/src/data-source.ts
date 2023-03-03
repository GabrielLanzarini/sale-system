import { DataSource } from "typeorm"
import { Product } from "./model/Product"
import { Adm_account } from "./model/Adm/Adm_account"
import { Adm_info } from "./model/Adm/Adm_info"
import { Request } from "./model/Request"
import { User_account } from "./model/User/User_account"
import { User_info } from "./model/User/User_info"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "Henriquegabriel1",
    database: "sale_system",
    entities: [
        Adm_account,
        User_account,
        Adm_info,
        User_info,
        Product,
        Request,
    ],
    migrations: [],
})
