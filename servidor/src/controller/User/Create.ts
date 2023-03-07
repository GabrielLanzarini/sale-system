import { Request, Response } from "express"
import { user_accountRepository } from "../../repos/User_accountRepository"
import { user_infoRepository } from "../../repos/User_infoRepository"
import bcrypt, { genSalt } from "bcrypt"

export class UserCreate {
    async create(req: Request, res: Response) {
        try {
            const { name, last_name, cpf, username, password, email } = req.body

            const usernameVerify = await user_accountRepository.findOneBy({
                username,
            })

            const emailVerify = await user_accountRepository.findOneBy({
                email,
            })

            const cpfVerify = await user_infoRepository.findOneBy({
                cpf,
            })

            if (usernameVerify)
                return res
                    .status(409)
                    .json({ message: "Usuário já cadastrado!" })
            if (emailVerify)
                return res.status(409).json({ message: "Email já cadastrado!" })
            if (cpfVerify)
                return res.status(409).json({ message: "Cpf já cadastrado!" })

            const salt = await bcrypt.genSalt(12)
            const hashPass = await bcrypt.hash(password, salt)

            const user_account = user_accountRepository.create({
                username,
                password: hashPass,
                email,
            })
            await user_accountRepository.save(user_account)

            const user_info = user_infoRepository.create({
                name,
                last_name,
                cpf,
                user_account,
            })
            await user_infoRepository.save(user_info)

            res.status(201).json({
                message: `Usuário ${username} criado com sucesso!`,
            })
        } catch (err) {
            console.log(err)

            res.status(404).json({ message: "Internal Server Error!" })
        }
    }
}
