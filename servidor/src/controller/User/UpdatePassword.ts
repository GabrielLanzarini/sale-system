import { Request, Response } from "express"
import bcrypt from "bcrypt"
import { AppDataSource } from "../../data-source"
import { user_accountRepository } from "../../repos/User_accountRepository"
import { User_account } from "../../model/User/User_account"

export class UserUpdatePass {
    async update(req: Request, res: Response) {
        try {
            const { id } = req.params
            const { password, newPassword } = req.body

            const user = await user_accountRepository.findOneByOrFail({ id })

            const passCompare = await bcrypt.compare(password, user.password)

            if (!passCompare)
                return res.status(401).json({ message: "Senha incorreta" })

            const salt = await bcrypt.genSalt(12)
            const newPasswordHash = await bcrypt.hash(newPassword, salt)

            await AppDataSource.createQueryBuilder()
                .update(User_account)
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
