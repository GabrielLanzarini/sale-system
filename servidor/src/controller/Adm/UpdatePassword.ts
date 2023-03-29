import { Request, Response } from "express"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import { AppDataSource } from "../../data-source"
import { adm_accountRepository } from "../../repos/Adm_accountRepository copy"
import { Adm_account } from "../../model/Adm/Adm_account"

const secret = process.env.SECRET as string

export class AdmUpdatePass {
    async update(req: Request, res: Response) {
        try {
            const { id } = req.params
            const { password, newPassword } = req.body

            const adm = await adm_accountRepository.findOneBy({ id })

            if (!adm)
                return res.status(405).json({ message: "Realize o login como administrador para continuar!" })

            const passCompare = await bcrypt.compare(password, adm.password)

            if (!passCompare)
                return res.status(401).json({ message: "Senha incorreta" })

            const salt = await bcrypt.genSalt(12)
            const newPasswordHash = await bcrypt.hash(newPassword, salt)

            await AppDataSource.createQueryBuilder()
                .update(Adm_account)
                .set({ password: newPasswordHash })
                .where({ id })
                .execute()

            return res
                .status(201)
                .json({ message: "Senha alterada com sucesso!" })
        } catch (err) {
            console.log(err)

            return res.status(404).json({ message: "Internal Server Error!" })
        }
    }
}
