import { Request, Response } from "express"
import { adm_accountRepository } from "../../repos/Adm_accountRepository copy"
import { productRepository } from "../../repos/ProductRepository"

export class ProductCreate {
    async create(req: Request, res: Response) {
        try {
            const { id } = req.params
            const { name, description, photo, amount, value } = req.body

            const adm_account = await adm_accountRepository.findOneByOrFail({
                id,
            })

            const product = productRepository.create({
                name,
                description,
                photo,
                amount,
                value,
                adm_account,
            })

            await productRepository.save(product)

            return res
                .status(201)
                .json({ message: `${name} adicionado com sucesso!` })
        } catch (err) {
            console.log(err)

            res.status(404).json({ message: "Internal Server Error!" })
        }
    }
}
