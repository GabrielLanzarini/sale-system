import { Request, Response } from "express"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import { user_accountRepository } from "../../repos/User_accountRepository"

const secret = process.env.SECRET as string

export class UserLogin {
    async login(req: Request, res: Response) {
        try {
            const { username, password } = req.body

            const userFind = await user_accountRepository.findOneBy({
                username,
            })

            if (!userFind)
                return res
                    .status(404)
                    .json({ message: "Usuário não encontrado!" })

            const passCompare = await bcrypt.compare(
                password,
                userFind.password
            )

            if (!passCompare)
                return res.status(401).json({ message: "Senha incorreta!" })

            const token = jwt.sign({ id: userFind.id }, secret, {
                expiresIn: 80000,
            })

            return res
                .cookie("x-acess-token", token)
                .status(200)
                .json({ message: "Usuário logado com sucesso!" })
        } catch (err) {
            return res.status(404).json({ message: "Internal Server Error!" })
        }
    }
}
