import { Router } from "express";
import { getWeather } from "../controllers/weather.controllers.js";
const weatherRouter = Router();

weatherRouter.route("/weather").get(getWeather);
export default weatherRouter;