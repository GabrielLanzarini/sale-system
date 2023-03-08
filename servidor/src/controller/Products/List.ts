import { Request, Response } from "express"
import { productRepository } from "../../repos/ProductRepository"

export class ProductList {
    async list(req: Request, res: Response) {
        try {
            const products = await productRepository.find({
                select: {
                    amount: true,
                    description: true,
                    name: true,
                    value: true,
                    photo: true,
                },
            })

            return res.status(200).json({ products })
        } catch (err) {
            res.status(404).json({ message: "Internal Server Error!" })
        }
    }
}
