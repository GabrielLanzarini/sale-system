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

            const product = await productRepository.findOneBy({
                id: product_id,
            })

            if (!product)
                return res.status(404).json({ message: "O produto não foi encontrado!" })

            const user_account = await user_accountRepository.findOneByOrFail({
                id,
            })

            const request = requestRepository.create({
                amount: amount,
                photo: product.photo,
                value: product.value,
                product_name: product.product_name,
                product_id: product.id,
                user_account,
            })

            await requestRepository.save(request)

            await AppDataSource.createQueryBuilder()
                .update(Product)
                .set({ amount: +(product.amount) - +amount })
                .where({ id: product.id })
                .execute()

            return res
                .status(201)
                .json({ message: `${product.product_name} vendido com sucesso!` })
        } catch (err) {
            console.log(err)

            res.status(404).json({ message: "Internal Server Error!" })
        }
    }
}
