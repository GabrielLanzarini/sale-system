import bcrypt from "bcrypt"
import { sign } from "jsonwebtoken"
import { CustomError } from "../custom/errorResponse"
import { AppDataSource } from "../data-source"
import { Adm_account } from "../model/Adm_account"
import { adm_accountRepository } from "../repos/repos"

const secret = process.env.SECRET as string

export class AdmService {
    async create() {
        try {
            const adm = adm_accountRepository.create({
                username: "admin",
                password: "$2b$12$euzOOwkgx9OthZkg/PniAeaI6mbRFT2FL9Sf6zb2E58ZOYex6MPQG",
            })

            await adm_accountRepository.save(adm)
        } catch (err) {
            throw err
        }
    }

    async login(username: string, password: string): Promise<string> {
        try {
            const admFind = await adm_accountRepository.findOneBy({
                username,
            })

            if (!admFind) throw new CustomError("Administrador não encontrado!", 404)

            const passCompare = await bcrypt.compare(password, admFind.password)

            if (!passCompare) throw new CustomError("Senha incorreta!", 401)

            return sign({ id: admFind.id }, secret, {
                expiresIn: 80000,
            })
        } catch (err) {
            throw err
        }
    }

    async updatePass(id: string, password: string, newPassword: string) {
        try {
            const adm = await adm_accountRepository.findOneBy({ id })

            if (!adm) throw new CustomError("Realize o login como administrador para continuar!", 405)

            const passCompare = await bcrypt.compare(password, adm.password)

            if (!passCompare) throw new CustomError("Senha incorreta", 401)

            const salt = await bcrypt.genSalt(12)

            const newPasswordHash = await bcrypt.hash(newPassword, salt)

            await AppDataSource.createQueryBuilder().update(Adm_account).set({ password: newPasswordHash }).where({ id }).execute()
        } catch (err) {
            throw err
        }
    }

    async updateUser(id: string, password: string, newUsername: string) {
        try {
            const userVerify = await adm_accountRepository.findOneBy({ username: newUsername })

            if (userVerify) throw new CustomError("Esse nome de usuário já está em uso!", 409)

            const adm = await adm_accountRepository.findOneByOrFail({ id })

            const passCompare = await bcrypt.compare(password, adm.password)

            if (!passCompare) throw new CustomError("Senha incorreta", 401)

            await AppDataSource.createQueryBuilder().update(Adm_account).set({ username: newUsername }).where({ id }).execute()
        } catch (err) {
            throw err
        }
    }
}
