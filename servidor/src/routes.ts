import { Router } from "express"
import { Logout } from "./controller/Logout"
import userRouter from "./controller/userController"
import productRouter from "./controller/productController"
import admRouter from "./controller/admController"

const routes = Router()

routes.use("/user", userRouter)
routes.use("/product", productRouter)
routes.use("/adm", admRouter)
routes.use("/logout", new Logout().logout)

export default routes
