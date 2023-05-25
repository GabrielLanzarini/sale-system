import bcrypt from "bcrypt"
import { sign } from "jsonwebtoken"
import { CustomError } from "../custom/errorResponse"
import { userPost } from "../custom/postTypes"
import { AppDataSource } from "../data-source"
import { User_account } from "../model/User_account"
import { user_accountRepository, requestRepository, user_infoRepository } from "../repos/repos"

const secret = process.env.SECRET as string

export class UserService {
    async create(user: userPost) {
        const userVerify = await user_accountRepository.findOneBy({
            username: user.username,
        })
        const emailVerify = await user_accountRepository.findOneBy({
            email: user.email,
        })
        const cpfVerify = await user_infoRepository.findOneBy({
            cpf: user.cpf,
        })
        if (emailVerify) {
            throw new CustomError("Email já cadastrado", 409)
        }
        if (cpfVerify) {
            throw new CustomError("Cpf já cadastrado", 409)
        }
        if (userVerify) {
            throw new CustomError("Usuário já cadastrado", 409)
        }
        const hashPass = await bcrypt.hash(user.password, await bcrypt.genSalt(12))

        const user_account = user_accountRepository.create({
            username: user.username,
            password: hashPass,
            email: user.email,
        })
        await user_accountRepository.save(user_account)

        await user_infoRepository.save(
            user_infoRepository.create({
                name: user.name,
                last_name: user.last_name,
                cpf: user.cpf,
                user_account,
            })
        )
    }

    async login(username: string, password: string): Promise<string> {
        try {
            const user = await user_accountRepository.findOneBy({
                username,
            })
            if (!user) {
                throw new CustomError("Usuário não encontrado!", 404)
            }

            const passCompare = await bcrypt.compare(password, user.password)
            if (!passCompare) {
                throw new CustomError("Senha incorreta", 401)
            }
            return sign({ id: user.id }, secret, {
                expiresIn: 80000,
            })
        } catch (err) {
            throw err
        }
    }

    async listInfos(id: string): Promise<object> {
        const user_account = await user_accountRepository.findOneByOrFail({
            id,
        })
        const user_info = await user_infoRepository.findOneByOrFail({
            user_account,
        })
        return {
            name: user_info.name,
            last_name: user_info.last_name,
            username: user_account.username,
            email: user_account.email,
        }
    }

    async listRequest(id: string): Promise<object> {
        const user_account = await user_accountRepository.findOneByOrFail({
            id,
        })

        const requests = await requestRepository.findBy({ user_account })
        if (!requests) throw new CustomError("Você ainda não possui nenhuma compra!", 404)
        return requests
    }

    async updatePassword(id: string, password: string, newPassword: string) {
        try {
            const user = await user_accountRepository.findOneByOrFail({ id })
            const passCompare = await bcrypt.compare(password, user.password)
            if (!passCompare) throw new CustomError("Senha incorreta", 401)
            const newPasswordHash = await bcrypt.hash(newPassword, await bcrypt.genSalt(12))

            await AppDataSource.createQueryBuilder().update(User_account).set({ password: newPasswordHash }).where({ id }).execute()
        } catch (err) {
            throw err
        }
    }

    async delete(id: string) {
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
    }
}
