import { AppDataSource } from "../data-source"
import { Product } from "../model/Product"
import { Adm_account } from "../model/Adm_account"
import { User_account, User_info } from "../model/User_account"
import { Request } from "../model/Request"

export const requestRepository = AppDataSource.getRepository(Request)
export const productRepository = AppDataSource.getRepository(Product)
export const user_infoRepository = AppDataSource.getRepository(User_info)
export const adm_accountRepository = AppDataSource.getRepository(Adm_account)
export const user_accountRepository = AppDataSource.getRepository(User_account)
