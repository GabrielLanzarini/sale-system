import { AppDataSource } from "../data-source"
import { Adm_account } from "../model/Adm/Adm_account"

const adm_accountRepository = AppDataSource.getRepository(Adm_account)
