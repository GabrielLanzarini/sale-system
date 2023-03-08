import { Request, Response } from "express"

export class Logout {
    async logout(req: Request, res: Response) {
        try {
            return res
                .clearCookie("x-acess-token")
                .status(200)
                .json({ message: "Usuário deslogado!" })
        } catch (err) {
            return res.status(404).json({ message: "Internal Server Error!" })
        }
    }
}
