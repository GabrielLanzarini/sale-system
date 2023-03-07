import { AppDataSource } from "../data-source"
import { User_info } from "../model/User/User_info"

export const user_infoRepository = AppDataSource.getRepository(User_info)
