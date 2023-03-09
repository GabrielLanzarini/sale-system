import { Request, Response } from "express"
import { user_accountRepository } from "../../repos/User_accountRepository"
import { user_infoRepository } from "../../repos/User_infoRepository"

export class UserInfos {
    async list(req: Request, res: Response) {
        try {
            const { id } = req.params

            const user_account = await user_accountRepository.findOneByOrFail({
                id,
            })

            const user_info = await user_infoRepository.findOneByOrFail({
                user_account,
            })

            const usuario = {
                username: user_account.username,
                email: user_account.email,
                name: user_info.name,
                last_name: user_info.last_name,
            }

            return res.status(200).json({ usuario })
        } catch (err) {
            res.status(404).json({ message: "Internal Server Error!" })
        }
    }
}
