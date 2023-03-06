import { AppDataSource } from "./data-source"
import express from "express"

const app = express()

AppDataSource.initialize().then(() => {
    app.use(routes)

    app.listen(3000, () => {
        console.log("Servidor iniciado na porta ", 3000)
    })
})