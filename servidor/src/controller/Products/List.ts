import { Request, Response } from "express"
import { productRepository } from "../../repos/ProductRepository"

export class ProductList {
    async list(req: Request, res: Response) {
        try {
            const products = await productRepository.find({
                select: {
                    id: true,
                    amount: true,
                    description: true,
                    product_name: true,
                    value: true,
                    photo: true,
                    created_at: true,
                },
            })

            if (products.length == 0)
                return res
                    .status(200)
                    .json({ message: "Ainda não existem produtos" })

            return res.status(200).json(products)
        } catch (err) {
            console.log(err)

            res.status(404).json({ message: "Internal Server Error!" })
        }
    }
}
