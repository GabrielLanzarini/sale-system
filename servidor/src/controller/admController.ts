import { Request, Response, Router } from "express"
import { JwtVerify } from "../middleware/jwtVerify"
import { AdmService } from "../service/admService"

const admRouter = Router()
const admServ = new AdmService()
const jwt = new JwtVerify()

admRouter.post("", async (req: Request, res: Response) => {
    try {
        admServ.create()
        return res.status(200).json({ message: "Adm criado com sucesso!" })
    } catch (err: any) {
        return res.status(err.statusCode).json({ message: err.message })
    }
})

admRouter.put("/username", jwt.AdmVerify, async (req: Request, res: Response) => {
    try {
        const { id } = req.params
        const { password, newUsername } = req.body
        await admServ.updateUser(id, password, newUsername)
        return res.status(200).json({ message: "Username alterado com sucesso!" })
    } catch (err: any) {
        return res.status(err.statusCode).json({ message: err.message })
    }
})

admRouter.put("/password", jwt.AdmVerify, async (req: Request, res: Response) => {
    try {
        const { id } = req.params
        const { password, newPassword } = req.body
        await admServ.updatePass(id, password, newPassword)
        return res.status(200).json({ message: "Senha alterada com sucesso!" })
    } catch (err: any) {
        return res.status(err.statusCode).json({ message: err.message })
    }
})

admRouter.post("/login", async (req: Request, res: Response) => {
    try {
        const { username, password } = req.body
        const token = await admServ.login(username, password)
        return res.cookie("x-adm-acess-token", token).status(200).json({ message: "Adm logado com sucesso!" })
    } catch (err: any) {
        return res.status(err.statusCode).json({ message: err.message })
    }
})

export default admRouter
