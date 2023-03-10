import { Request, Response } from "express"
import { requestRepository } from "../../repos/RequestRepository"

export class UserRequests {
    async list(req: Request, res: Response) {
        try {
            const { id } = req.params

            const requests = await requestRepository.find({
                select: { sale_date: true },
                relations: {
                    product: true,
                },
            })

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
