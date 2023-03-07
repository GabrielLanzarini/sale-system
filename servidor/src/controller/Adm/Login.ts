import { Request, Response } from "express"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import { adm_accountRepository } from "../../repos/Adm_accountRepository copy"

const secret = process.env.SECRET as string

export class AdmLogin {
    async login(req: Request, res: Response) {
        try {
            const { username, password } = req.body

            const admFind = await adm_accountRepository.findOneBy({
                username,
            })

            if (!admFind)
                return res
                    .status(404)
                    .json({ message: "Administrador não encontrado!" })

            const passCompare = await bcrypt.compare(password, admFind.password)

            if (!passCompare)
                return res.status(401).json({ message: "Senha incorreta!" })

            const token = jwt.sign({ id: admFind.id }, secret, {
                expiresIn: 80000,
            })

            return res
                .cookie("x-acess-token", token)
                .status(200)
                .json({ message: "Administrador logado com sucesso!" })
        } catch (err) {
            return res.status(404).json({ message: "Internal Server Error!" })
        }
    }
}
