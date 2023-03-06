import { AppDataSource } from "../data-source"
import { Product } from "../model/Product"

const productRepository = AppDataSource.getRepository(Product)
