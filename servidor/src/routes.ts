import { Router } from "express"
import { AdmCreate } from "./controller/Adm/Create"
import { AdmLogin } from "./controller/Adm/Login"
import { UserCreate } from "./controller/User/Create"
import { UserLogin } from "./controller/User/Login"

const routes = Router()

routes.post("/user/create", new UserCreate().create)
routes.post("/user/login", new UserLogin().login)

routes.post("/adm/login", new AdmLogin().login)
// routes.post("/adm/create", new AdmCreate().create)

export default routes
