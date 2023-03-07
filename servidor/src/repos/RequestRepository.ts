import { AppDataSource } from "../data-source"
import { Request } from "../model/Request"

export const requestRepository = AppDataSource.getRepository(Request)
