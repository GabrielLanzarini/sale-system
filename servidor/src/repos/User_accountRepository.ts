import { AppDataSource } from "../data-source"
import { User_account } from "../model/User/User_account"

export const user_accountRepository = AppDataSource.getRepository(User_account)
