import { Router } from "express";
import { getConstruction } from "../controllers/construction.controllers.js";
const constructionRouter = Router();

constructionRouter.route("/construction").get(getConstruction);
export default constructionRouter;