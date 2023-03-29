import { Request, Response } from "express"
import { adm_accountRepository } from "../../repos/Adm_accountRepository copy"
import { productRepository } from "../../repos/ProductRepository"

export class ProductCreate {
    async create(req: Request, res: Response) {
        try {
            const { id } = req.params
            const { product_name, description, photo, amount, value } = req.body

            const adm_account = await adm_accountRepository.findOneBy({
                id,
            })

            if (!adm_account)
                return res.status(405).json({ message: "Realize o login como administrador!" })

            const product = productRepository.create({
                product_name,
                description,
                photo,
                amount,
                value,
                adm_account,
            })

            await productRepository.save(product)

            return res
                .status(201)
                .json({ message: `${product_name} adicionado com sucesso!` })
        } catch (err) {
            console.log(err)

            res.status(404).json({ message: "Internal Server Error!" })
        }
    }
}
