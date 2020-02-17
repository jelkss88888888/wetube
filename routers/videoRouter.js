import express from "express";
import routes from "../routes";
import { getUploadCon, postUploadCon } from "../controllers/videoController";
import { videoDetailCon, editVideoCon } from "../controllers/videoController";
import { uploadVideoMiddleWare } from "../middlewares";

const videoRouter = express.Router();

videoRouter.get(routes.uploadVideo, getUploadCon);
videoRouter.post(routes.uploadVideo, uploadVideoMiddleWare, postUploadCon);

videoRouter.get(routes.videoDetail(), videoDetailCon);
videoRouter.get(routes.editVideo, editVideoCon);

export default videoRouter;