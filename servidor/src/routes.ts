import { Router } from "express"
import { AdmCreate } from "./controller/Adm/Create"
import { AdmLogin } from "./controller/Adm/Login"
import { AdmUpdatePass } from "./controller/Adm/UpdatePassword"
import { AdmUpdateUsername } from "./controller/Adm/UpdateUsername"
import { Logout } from "./controller/Logout"
import { ProductCreate } from "./controller/Products/Create"
import { ProductList } from "./controller/Products/List"
import { ProductSell } from "./controller/Products/Sell"
import { UserCreate } from "./controller/User/Create"
import { UserRequests } from "./controller/User/ListRequests"
import { UserLogin } from "./controller/User/Login"
import { UserUpdatePass } from "./controller/User/UpdatePassword"
import { JwtVerify } from "./middleware/jwtVerify"

const routes = Router()

routes.post("/adm/login", new AdmLogin().login)
routes.put(
    "/adm/updatePass",
    new JwtVerify().verify,
    new AdmUpdatePass().update
)
routes.put(
    "/adm/updateUser",
    new JwtVerify().verify,
    new AdmUpdateUsername().update
)

routes.post("/user/create", new UserCreate().create)
routes.post("/user/login", new UserLogin().login)
routes.put(
    "/user/updatePass",
    new JwtVerify().verify,
    new UserUpdatePass().update
)
routes.get("/user/requests", new JwtVerify().verify, new UserRequests().list)

routes.post(
    "/product/create",
    new JwtVerify().verify,
    new ProductCreate().create
)
routes.put(
    "/product/sell/:id",
    new JwtVerify().verify,
    new ProductSell().update
)
routes.get("/products", new ProductList().list)

routes.delete("/logout", new Logout().logout)

// routes.post("/adm/create", new AdmCreate().create)

export default routes
