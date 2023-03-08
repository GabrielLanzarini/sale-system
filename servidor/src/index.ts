import { AppDataSource } from "./data-source"
import express, { json } from "express"
import routes from "./routes"
import cookie from "cookie-parser"

const app = express()

AppDataSource.initialize().then(() => {
    app.use(json())
    app.use(cookie())

    app.use(routes)

    app.listen(3000, () => {
        console.log("Servidor iniciado na porta ", 3000)
    })
})
