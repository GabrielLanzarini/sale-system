import { Request, Response } from "express"
import { requestRepository } from "../../repos/RequestRepository"
import { user_accountRepository } from "../../repos/User_accountRepository"
import { user_infoRepository } from "../../repos/User_infoRepository"

export class UserDelete {
    async delete(req: Request, res: Response) {
        try {
            const { id } = req.params

            const user_account = await user_accountRepository.findOneByOrFail({
                id,
            })

            const user_info = await user_infoRepository.findOneByOrFail({
                user_account,
            })

            const requests = await requestRepository.findBy({
                user_account,
            })

            await user_infoRepository.remove(user_info)
            requests.map(async (request) => {
                await requestRepository.remove(request)
            })
            await user_accountRepository.remove(user_account)

            return res.clearCookie("x-acess-token").status(204)
        } catch (err) {
            console.log(err)

            return res.status(404).json({ message: "Internal error server!" })
        }
    }
}
