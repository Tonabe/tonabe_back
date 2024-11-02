import { Router } from "express";
import produtoRouter from "./produto.route";

const routes = Router()

routes.use('/produto', produtoRouter)

export default routes