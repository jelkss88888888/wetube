import express from "express";
import routes from "../routes";
import { homeCon, searchCon } from "../controllers/videoController";
import { getJoinCon, postJoinCon, getLoginCon, postLoginCon, logoutCon } from "../controllers/userController";

const globalRouter = express.Router();

globalRouter.get(routes.join, getJoinCon);
globalRouter.post(routes.join, postJoinCon);

globalRouter.get(routes.login, getLoginCon);
globalRouter.post(routes.login, postLoginCon);

globalRouter.get(routes.home, homeCon);
globalRouter.get(routes.logout, logoutCon);
globalRouter.get(routes.search, searchCon);

export default globalRouter;