import { Request, Response, Router } from "express"
import { userPost } from "../custom/postTypes"
import { JwtVerify } from "../middleware/jwtVerify"
import { UserService } from "../service/userService"

const userRouter = Router()
const userServ = new UserService()
const jwt = new JwtVerify()

userRouter.get("/infos", jwt.userVerify, async (req: Request, res: Response) => {
    try {
        const user = await userServ.listInfos(req.params.id)
        return res.status(200).json(user)
    } catch (err: any) {
        return res.status(err.statusCode).json({ message: err.message })
    }
})

userRouter.get("/requests", jwt.userVerify, async (req: Request, res: Response) => {
    try {
        const requests = await userServ.listRequest(req.body.id)
        return res.status(200).json(requests)
    } catch (err: any) {
        return res.status(err.statusCode).json({ message: err.message })
    }
})

userRouter.post("/login", async (req: Request, res: Response) => {
    try {
        const { username, password } = req.body
        const token = await userServ.login(username, password)
        return res.cookie("x-acess-token", token).status(200).json({ message: "login realizado com sucesso!" })
    } catch (err: any) {
        return res.status(err.statusCode).json({ message: err.message })
    }
})

userRouter.post("/create", async (req: Request, res: Response) => {
    try {
        const user: userPost = req.body
        await userServ.create(user)
        return res.status(204).json({ message: "Usuario criado com sucesso!" })
    } catch (err: any) {
        return res.status(err.statusCode).json({ message: err.message })
    }
})

userRouter.put("/password", jwt.userVerify, async (req: Request, res: Response) => {
    try {
        const { id } = req.params
        const { password, newPassword } = req.body
        await userServ.updatePassword(id, password, newPassword)
        return res.status(201).json({ message: "Senha alterada com sucesso!" })
    } catch (err: any) {
        return res.status(err.statusCode).json({ message: err.message })
    }
})

userRouter.delete("", jwt.userVerify, async (req: Request, res: Response) => {
    try {
        const { id } = req.params
        await userServ.delete(id)
        return res.clearCookie("x-acess-token").status(204).json({ message: "Usuário deletado!" })
    } catch (err: any) {
        return res.status(err.statusCode).json({ message: err.message })
    }
})

export default userRouter
