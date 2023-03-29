import { Request, Response } from "express"
import { requestRepository } from "../../repos/RequestRepository"
import { user_accountRepository } from "../../repos/User_accountRepository"

export class UserRequests {
    async list(req: Request, res: Response) {
        try {
            const { id } = req.params

            const user_account = await user_accountRepository.findOneByOrFail({ id })

            const requests = await requestRepository.findOneBy({ user_account })

            if (!requests)
                return res
                    .status(404)
                    .json({ message: "Você ainda não possui nenhuma compra!" })

            return res.status(200).json({ requests })
        } catch (err) {
            res.status(404).json({ message: "Internal Server Error!" })
        }
    }
}
