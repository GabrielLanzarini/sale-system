import { AppDataSource } from "../data-source"
import { Product } from "../model/Product"

export const productRepository = AppDataSource.getRepository(Product)
