import { Request, Response } from "express"
import { adm_accountRepository } from "../../repos/Adm_accountRepository copy"

export class AdmCreate {
    async create(req: Request, res: Response) {
        try {
            const adm = adm_accountRepository.create({
                username: "admin",
                password:
                    "$2b$12$euzOOwkgx9OthZkg/PniAeaI6mbRFT2FL9Sf6zb2E58ZOYex6MPQG",
            })

            await adm_accountRepository.save(adm)

            res.status(200).json({
                message: `ADM salvo com sucesso!`,
            })
        } catch (err) {
            console.log(err)

            res.status(404).json({ message: "Internal Server Error!" })
        }
    }
}
