import { AppDataSource } from "../data-source"
import { Adm_info } from "../model/Adm/Adm_info"

const adm_infoRepository = AppDataSource.getRepository(Adm_info)
