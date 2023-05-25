import { CustomError } from "../custom/errorResponse"
import { productPost } from "../custom/postTypes"
import { AppDataSource } from "../data-source"
import { Product } from "../model/Product"
import { user_accountRepository, productRepository, adm_accountRepository, requestRepository } from "../repos/repos"

export class ProductService {
    async create(id: string, product: productPost) {
        try {
            const adm_account = await adm_accountRepository.findOneBy({
                id,
            })

            if (!adm_account) throw new CustomError("Realize o login como administrador!", 405)

            const newProduct = productRepository.create({
                product_name: product.product_name,
                description: product.description,
                photo: product.photo,
                amount: product.amount,
                value: product.value,
                adm_account,
            })
            await productRepository.save(newProduct)
        } catch (err) {
            throw err
        }
    }

    async listAll(id: string): Promise<object> {
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
                where: { adm_account: { id } },
            })
            if (products.length == 0) throw new CustomError("Ainda não existem produtos", 200)
            return products
        } catch (err) {
            throw err
        }
    }

    async sell(id: string, product_id: string, amount: number) {
        try {
            const product = await productRepository.findOneBy({
                id: product_id,
            })
            if (!product) throw new CustomError("O produto não foi encontrado!", 404)

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
                .set({ amount: +product.amount - +amount })
                .where({ id: product.id })
                .execute()
        } catch (err) {
            throw err
        }
    }

    async delete(id: string, product_id: string) {
        try {
            const adm = await adm_accountRepository.findOneBy({ id })

            if (!adm) throw new CustomError("Realize o login como administrador para continuar!", 405)

            const product = await productRepository.findOneBy({
                id: product_id,
            })

            if (!product) throw new CustomError("O produto informado não existe!", 404)

            await productRepository.remove(product)
        } catch (err) {
            throw err
        }
    }
}
