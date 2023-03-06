import { Response } from "express"
import { Request } from "../../model/Request"

export default class UserCreate {
    async create(req: Request, res: Response) {
        try {
            res.status(201).json({ message: "Usuário criado com sucesso!" })
        } catch (err) {
            res.status(404).json({ message: "Internal Server Error!" })
        }
    }
}
