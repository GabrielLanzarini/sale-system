import { AppDataSource } from "../data-source"
import { Request } from "../model/Request"

const requestRepository = AppDataSource.getRepository(Request)
