import express from "express";
import routes from "../routes";
import { editProfileCon, postEditProfileCon, changePasswordCon, userDetailCon } from "../controllers/userController";

const userRouter = express.Router();

userRouter.get(routes.editProfile, editProfileCon);
userRouter.post(routes.editProfile, postEditProfileCon);

userRouter.get(routes.changePassword, changePasswordCon);
userRouter.get(routes.userDetail(), userDetailCon);

export default userRouter;