import { Request, Response } from "express"
import { AppDataSource } from "../../data-source"
import { Product } from "../../model/Product"
import { productRepository } from "../../repos/ProductRepository"

export class ProductSell {
    async update(req: Request, res: Response) {
        try {
            const { product_id } = req.params
            const { amount } = req.body

            const product = await productRepository.findOneByOrFail({
                id: product_id,
            })

            await AppDataSource.createQueryBuilder()
                .update(Product)
                .set({ amount: product.amount - +amount })
                .where({ id: product.id })
                .execute()

            return res
                .status(201)
                .json({ message: `${product.name} vendido com sucesso!` })
        } catch (err) {
            res.status(404).json({ message: "Internal Server Error!" })
        }
    }
}
