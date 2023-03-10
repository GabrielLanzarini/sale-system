import { Request, Response } from "express"
import { adm_accountRepository } from "../../repos/Adm_accountRepository copy"
import { productRepository } from "../../repos/ProductRepository"

export class ProductDelete {
    async delete(req: Request, res: Response) {
        try {
            const { id, product_id } = req.params

            const adm = await adm_accountRepository.findOneBy({ id })

            if (!adm)
                return res.status(405).json({
                    message:
                        "Realize o login como administrador para continuar!",
                })

            const product = await productRepository.findOneByOrFail({
                id: product_id,
            })

            await productRepository.remove(product)

            return res.status(204)
        } catch (err) {
            return res.status(404).json({ message: "Internal error server!" })
        }
    }
}
