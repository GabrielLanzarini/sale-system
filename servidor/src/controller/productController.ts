import { Request, Response, Router } from "express"
import { productPost } from "../custom/postTypes"
import { JwtVerify } from "../middleware/jwtVerify"
import { ProductService } from "../service/productService"

const productRouter = Router()
const productServ = new ProductService()
const jwt = new JwtVerify()

productRouter.post("", jwt.AdmVerify, async (req: Request, res: Response) => {
    try {
        const product: productPost = req.body
        await productServ.create(req.params.id, product)
        return res.status(204).json({ message: "Produto cadastrado com sucesso!" })
    } catch (err: any) {
        return res.status(err.statusCode).json({ message: err.message })
    }
})

productRouter.get("", async (req: Request, res: Response) => {
    try {
        const products = await productServ.listAll(req.params.id)
        return res.status(200).json(products)
    } catch (err: any) {
        return res.status(err.statusCode).json({ message: err.message })
    }
})

productRouter.put("/:product_id", jwt.userVerify, async (req: Request, res: Response) => {
    try {
        const { product_id, id } = req.params
        const { amount } = req.body
        await productServ.sell(id, product_id, amount)
        return res.status(200).json({ message: "Produto comprado com sucesso!" })
    } catch (err: any) {
        return res.status(err.statusCode).json({ message: err.message })
    }
})

productRouter.delete("/:product_id", jwt.AdmVerify, async (req: Request, res: Response) => {
    try {
        const { product_id, id } = req.params
        await productServ.delete(id, product_id)
        return res.status(204).json({ message: "Produto deletado com sucesso!" })
    } catch (err: any) {
        return res.status(err.statusCode).json({ message: err.message })
    }
})

export default productRouter
