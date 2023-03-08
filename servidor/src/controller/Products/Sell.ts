import { Request, Response } from "express"
import { AppDataSource } from "../../data-source"
import { Product } from "../../model/Product"
import { productRepository } from "../../repos/ProductRepository"
import { requestRepository } from "../../repos/RequestRepository"
import { user_accountRepository } from "../../repos/User_accountRepository"

export class ProductSell {
    async update(req: Request, res: Response) {
        try {
            const { product_id, id } = req.params
            const { amount } = req.body

            const product = await productRepository.findOneByOrFail({
                id: product_id,
            })

            const user_account = await user_accountRepository.findOneByOrFail({
                id,
            })

            const request = requestRepository.create({
                product,
                user_account,
            })

            await requestRepository.save(request)

            await AppDataSource.createQueryBuilder()
                .update(Product)
                .set({ amount: product.amount - +amount })
                .where({ id: product.id })
                .execute()

            return res
                .status(201)
                .json({ message: `${product.name} vendido com sucesso!` })
        } catch (err) {
            console.log(err)

            res.status(404).json({ message: "Internal Server Error!" })
        }
    }
}
